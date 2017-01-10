import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
import { Metadata } from "./common/Metadata";
export declare type TransferStatus = "created" | "approved" | "cancelled" | "processing" | "paid" | "failed";
export declare type TransfersSortBy = "createdOn";
export interface TransfersListParams extends CRUDPaginationParams, CRUDSortingParams<TransfersSortBy>, AuthParams {
    currency?: string;
    status?: TransferStatus;
    startedBy?: string;
}
export interface TransferItem {
    id: string;
    merchantId: string;
    bankAccountId: string;
    amount: number;
    currency: string;
    amountFormatted: number;
    status: TransferStatus;
    errorCode?: string;
    errorText?: string;
    metadata?: Metadata;
    startedBy: string;
    createdOn: number;
    from: number;
    to: number;
}
export declare type ResponseTransfer = TransferItem;
export declare type ResponseTransfers = CRUDItemsResponse<TransferItem>;
export declare class Transfers extends CRUDResource {
    static routeBase: string;
    list(data?: TransfersListParams, callback?: ResponseCallback<ResponseTransfers>): Promise<ResponseTransfers>;
    get(id: string, data?: AuthParams, callback?: ResponseCallback<ResponseTransfer>): Promise<ResponseTransfer>;
}
