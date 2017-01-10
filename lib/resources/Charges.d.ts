import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
import { PaymentError } from "./common/PaymentError";
import { Metadata } from "./common/Metadata";
import { ProcessingMode } from "./common/ProcessingMode";
export declare type ChargeStatus = "pending" | "successful" | "failed" | "error";
export declare type ChargesSortBy = "createdOn";
export interface ChargesListParams extends CRUDPaginationParams, CRUDSortingParams<ChargesSortBy>, AuthParams {
}
export interface ChargeCreateParams extends AuthParams {
    transactionTokenId: string;
    amount: number;
    currency: string;
    metadata?: Metadata;
}
export interface ChargeItem {
    id: string;
    storeId: string;
    ledgerId?: string;
    subscriptionId?: string;
    requestedAmount: number;
    requestedCurrency: string;
    requestedAmountFormatted: number;
    chargedAmount: number;
    chargedCurrency: string;
    chargedAmountFormatted: number;
    status: ChargeStatus;
    error?: PaymentError;
    metadata?: Metadata;
    mode: ProcessingMode;
    createdOn: number;
    transactionTokenId?: string;
}
export declare type ResponseCharge = ChargeItem;
export declare type ResponseCharges = CRUDItemsResponse<ChargeItem>;
export declare class Charges extends CRUDResource {
    static requiredParams: Array<string>;
    static routeBase: string;
    list(storeId: string, data?: ChargesListParams, callback?: ResponseCallback<ResponseCharges>): Promise<ResponseCharges>;
    create(data: ChargeCreateParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge>;
    get(storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge>;
    poll(storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseCharge>): Promise<ResponseCharge>;
}
