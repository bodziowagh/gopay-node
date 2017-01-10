import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
import { PaymentError } from "./common/PaymentError";
import { Metadata } from "./common/Metadata";
import { ProcessingMode } from "./common/ProcessingMode";
export declare type RefundStatus = "pending" | "successful" | "failed" | "error";
export declare type RefundReason = "duplicate" | "fraud" | "customer_request";
export declare type RefundsSortBy = "createdOn";
export interface RefundsListParams extends CRUDPaginationParams, CRUDSortingParams<RefundsSortBy>, AuthParams {
}
export interface RefundCreateParams extends AuthParams {
    amount: number;
    currency: string;
    reason?: RefundReason;
    message?: string;
    metadata?: Metadata;
}
export interface RefundItem {
    id: string;
    chargeId: string;
    ledgerId?: string;
    status: RefundStatus;
    amount: number;
    currency: string;
    amountFormatted: number;
    reason?: RefundReason;
    message?: string;
    error?: PaymentError;
    metadata?: Metadata;
    mode: ProcessingMode;
    createdOn: number;
}
export declare type ResponseRefund = RefundItem;
export declare type ResponseRefunds = CRUDItemsResponse<RefundItem>;
export declare class Refunds extends CRUDResource {
    static requiredParams: Array<string>;
    static routeBase: string;
    list(storeId: string, chargeId: string, data?: RefundsListParams, callback?: ResponseCallback<ResponseRefunds>): Promise<ResponseRefunds>;
    create(storeId: string, chargeId: string, data: RefundCreateParams, callback?: ResponseCallback<ResponseRefund>): Promise<ResponseRefund>;
    get(storeId: string, chargeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseRefund>): Promise<ResponseRefund>;
}
