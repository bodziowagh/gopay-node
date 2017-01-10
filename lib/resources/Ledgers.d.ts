import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
export declare type LedgersSortBy = "createdOn";
export interface LedgersListParams extends CRUDPaginationParams, CRUDSortingParams<LedgersSortBy>, AuthParams {
    all?: boolean;
    from?: number | string;
    to?: number | string;
    min?: number;
    max?: number;
    currency?: string;
}
export interface LedgerItem {
    id: string;
    merchantId: string;
    storeId?: string;
    transferId?: string;
    amount: number;
    currency: string;
    amountFormatted: number;
    percentFee: number;
    flatFee: number;
    flatFeeCurrency: string;
    flatFeeFormatted: number;
    exchangeRate: number;
    note?: string;
    createdOn: number;
}
export declare type ResponseLedgers = CRUDItemsResponse<LedgerItem>;
export declare class Ledgers extends CRUDResource {
    static routeBase: string;
    list(transferId: string, data?: LedgersListParams, callback?: ResponseCallback<ResponseLedgers>): Promise<ResponseLedgers>;
}
