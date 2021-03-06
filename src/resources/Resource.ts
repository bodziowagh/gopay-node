import {RestAPI, HTTPMethod, ResponseCallback, ErrorResponse, DataParams} from "../api/RestAPI"
import { PathParameterError } from "../errors/PathParameterError"
import { RequestParameterError } from "../errors/RequestParameterError"
import { fromError } from "../errors/parser"
import { missingKeys } from "../utils/object"

export type DefinedRoute = (data?: any, callback?: any, pathParams?: Array<string>, ...params: Array<string>) => Promise<any>

export abstract class Resource {

    public static compilePath(path: string, pathParams: any): string {
        return path
            .replace(/\((\w|:|\/)+\)/ig, (o: string) => {
                const part: string = o.replace(/:(\w+)/ig, (s: string, p: string) => {
                    return (pathParams as any)[p] || s
                })
                return part.indexOf(":") === -1 ? part.replace(/\(|\)/g, "") : ""
            })
            .replace(/:(\w+)/ig, (s: string, p: string) => (pathParams as any)[p] || s)
    }

    public api: RestAPI

    constructor(api: RestAPI) {
        this.api = api
    }

    public defineRoute(method: HTTPMethod, path: string, required: Array<string> = []): DefinedRoute {
        const api: RestAPI = this.api

        return function route<A, B>(data?: DataParams<A>,
                                    callback?: ResponseCallback<B>,
                                    pathParams: Array<string> = [],
                                    ...params: Array<string>): Promise<B> {

            const _params: any = params.reduce((p: any, param: string, i: number) => {
                if (pathParams && pathParams[i]) {
                    p[pathParams[i]] = param
                }
                return p
            }, {})

            const url: string = Resource.compilePath(path, _params)
            const missingPathParams: Array<string> = (url.match(/:([a-z]+)/ig) || [])
                .map((m: string) => m.replace(":", ""))
            const missingParams: Array<string> = missingKeys(data, required)
            let err: ErrorResponse

            if (missingPathParams.length > 0) {
                err = fromError(new PathParameterError(missingPathParams[0]))
                if (typeof callback === "function") {
                    callback(err)
                }
                return Promise.reject(err)
            }

            if (missingParams.length > 0) {
                err = fromError(new RequestParameterError(missingParams[0]))
                if (typeof callback === "function") {
                    callback(err)
                }
                return Promise.reject(err)
            }

            return api.send(method, url, data, callback)
        }
    }

}
