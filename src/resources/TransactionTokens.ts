import { ResponseCallback, ErrorResponse, AuthParams } from "../api/RestAPI"
import { CRUDItemsResponse, CRUDPaginationParams, CRUDResource } from "./CRUDResource"
import { ProcessingMode } from "./common/ProcessingMode"
import { PhoneNumber } from "./common/PhoneNumber"

/* Request */

export interface TransactionTokenCardData {
    cardholder: string
    cardNumber: string
    expMonth: number | string
    expYear: number | string
    cvv: string
    line1?: string
    line2?: string
    state?: string
    city?: string
    country?: string
    zip?: string
    phoneNumber?: PhoneNumber
}

export interface TransactionTokenQRScanData {
    scannedQR: string
}

export interface TransactionTokenCreateParams extends AuthParams {
    paymentType: string
    type: TransactionTokenType
    email: string
    amount: number
    currency: string
    data: TransactionTokenCardData | TransactionTokenQRScanData
}

export interface TransactionTokenListParams extends CRUDPaginationParams, AuthParams {}

export interface TransactionTokenUpdateParams extends AuthParams {
    amount: number
}

/* Response */

export interface TransactionTokenCardDetails {
    cardholder: string
    expMonth: number
    expYear: number
    lastFour: string
    brand: string
    country?: string
}

export interface TransactionTokenCardBilling {
    line1?: string
    line2?: string
    state?: string
    city?: string
    country?: string
    zip?: string
    phoneNumber?: PhoneNumber
}

export interface TransactionTokenCardDataItem {
    card?: TransactionTokenCardDetails
    billing?: TransactionTokenCardBilling
}
export type TransactionTokenQRScanDataItem = object

export type TransactionTokenType = "one_time" | "subscription" | "recurring"

export interface TransactionTokenItem {
    id: string
    storeId: string
    email: string
    mode: ProcessingMode
    createdOn: string
    lastUsedOn: string
    type: TransactionTokenType
    paymentType: string
    requestedAmount: number
    requestedCurrency: string
    data?: TransactionTokenCardDataItem | TransactionTokenQRScanDataItem
}

export type ResponseTransactionToken = TransactionTokenItem
export type ResponseTransactionTokens = CRUDItemsResponse<TransactionTokenItem>

export class TransactionTokens extends CRUDResource {

    public static requiredParams: Array<string> = ["paymentType", "type", "email", "amount", "currency", "data"]

    public static routeBase: string = "/stores/:storeId/tokens"

    public create(data: TransactionTokenCreateParams,
                  callback?: ResponseCallback<ResponseTransactionToken>): Promise<ResponseTransactionToken> {
        return this.defineRoute("POST", "/tokens", TransactionTokens.requiredParams)(data, callback)
    }

    public get(storeId: string,
               id: string,
               data?: AuthParams,
               callback?: ResponseCallback<ResponseTransactionToken>): Promise<ResponseTransactionToken> {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id)
    }

    public list(storeId: string,
                data?: TransactionTokenListParams,
                callback?: ResponseCallback<ResponseTransactionTokens>): Promise<ResponseTransactionTokens> {
        return this._listRoute()(data, callback, ["storeId"], storeId)
    }

    public update(storeId: string,
                  id: string,
                  data?: TransactionTokenUpdateParams,
                  callback?: ResponseCallback<ResponseTransactionToken>): Promise<ResponseTransactionToken> {
        return this._updateRoute()(data, callback, ["storeId", "id"], storeId, id)
    }

}
