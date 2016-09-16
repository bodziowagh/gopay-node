import { ResponseCallback, AuthParams } from "../api/RestAPI"
import { CRUDResource, CRUDPaginationParams, CRUDItemsResponse } from "./CRUDResource"
import { PaymentError } from "./common/PaymentError"

/* Request */
export interface ChargesListParams extends CRUDPaginationParams, AuthParams {}
export interface ChargeCreateParams extends AuthParams {
    token: string
    amount: number
    currency: string
    metadata?: any
}

/* Response */
export interface ChargeItem {
    id: string
    storeId: string
    ledgerId?: string
    subscriptionId?: string
    requestedAmount: number
    requestedCurrency: string
    chargedAmount: number
    chargedCurrency: string
    status: string
    error?: PaymentError
    metadata?: any
    testMode: boolean
    createdOn: number
    updatedOn: number
}

export type ResponseCharge = ChargeItem
export type ResponseCharges = CRUDItemsResponse<ChargeItem>

export class Charges extends CRUDResource {

    public static requiredParams: Array<string> = ["token", "amount", "currency"]

    public static routeBase: string = "/stores/:storeId/charges"

    public list (storeId: string, data?: ChargesListParams, callback?: ResponseCallback<ResponseCharges>): Promise<ResponseCharges> {
        return this._listRoute()(data, callback, ["storeId"], storeId)
    }

    public create (data: ChargeCreateParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge> {
        return this.defineRoute("POST", "/charges", Charges.requiredParams)(data, callback)
    }

    public get (storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge> {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id)
    }

    public poll (storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge> {
        const promise: () => Promise<ResponseCharge> = () => this._getRoute()(data, null, ["storeId", "id"], storeId, id)
        return this.api.longPolling(
            promise,
            (response: ResponseCharge) => response.status !== "pending",
            callback
        )
    }

}
