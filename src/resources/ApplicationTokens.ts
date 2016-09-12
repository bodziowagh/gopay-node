import { CRUDResource, CRUDStoreIdParam, CRUDPaginationParams, CRUDIdStoreIdParam } from "./CRUDResource"
import { SDKCallbackFunction } from "../api/RestAPI"
import { applicationTokenUpdateSchema, applicationTokenCreateSchema } from "../validation/schemas/application-token"

export interface ApplicationTokenParams {
    domains?: Array<string>
}

export interface ApplicationTokenCreateParams extends ApplicationTokenParams {
    testMode: boolean
}

export class ApplicationTokens extends CRUDResource {

    public static routeBase: string = "/(merchants/:merchantId/)stores/:storeId/app_tokens"

    public list (storeId: string,
                 callback?: SDKCallbackFunction,
                 data?: CRUDPaginationParams,
                 merchantId?: string,
                 token?: string): Promise<any> {
        const params: CRUDStoreIdParam = { storeId, merchantId }
        return this._listRoute(params, data, callback, { token })
    }

    public create (storeId: string,
                   data: ApplicationTokenCreateParams,
                   callback?: SDKCallbackFunction,
                   merchantId?: string,
                   token?: string): Promise<any> {
        const params: CRUDStoreIdParam = { storeId, merchantId }
        return this._createRoute(params, data, callback, { token, validationSchema : applicationTokenCreateSchema })
    }

    public update (storeId: string,
                   id: string,
                   data: ApplicationTokenParams,
                   callback?: SDKCallbackFunction,
                   merchantId?: string,
                   token?: string): Promise<any> {
        const params: CRUDIdStoreIdParam = { id, storeId, merchantId }
        return this._updateRoute(params, data, callback, { token, validationSchema : applicationTokenUpdateSchema })
    }

    public delete (storeId: string,
                   id: string,
                   callback?: SDKCallbackFunction,
                   merchantId?: string,
                   token?: string): Promise<any> {
        const params: CRUDIdStoreIdParam = { id, storeId, merchantId }
        return this._deleteRoute(params, null, callback, { token })
    }

}