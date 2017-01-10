import { ResponseCallback, AuthParams, ErrorResponse } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
import { Metadata } from "./common/Metadata";
import { ProcessingMode } from "./common/ProcessingMode";
import { ResponseCharges, ChargesListParams } from "./Charges";
export declare type SubscriptionPeriod = "daily" | "weekly" | "biweekly" | "monthly" | "quarterly" | "biannually" | "annually";
export declare type SubscriptionStatus = "unverified" | "current" | "unpaid" | "cancelled";
export declare type SubscriptionsSortBy = "createdOn";
export interface SubscriptionsListParams extends CRUDPaginationParams, CRUDSortingParams<SubscriptionsSortBy>, AuthParams {
    search?: string;
    status?: SubscriptionStatus;
    mode?: ProcessingMode;
}
export interface SubscriptionCreateParams extends AuthParams {
    token: string;
    amount: number;
    currency: string;
    period: SubscriptionPeriod;
    metadata?: Metadata;
}
export interface SubscriptionItem {
    id: string;
    storeId: string;
    amount: number;
    currency: string;
    amountFormatted: number;
    period: SubscriptionPeriod;
    status: SubscriptionStatus;
    metadata?: Metadata;
    mode: ProcessingMode;
    createdOn: number;
}
export declare type ResponseSubscription = SubscriptionItem;
export declare type ResponseSubscriptions = CRUDItemsResponse<SubscriptionItem>;
export declare class Subscriptions extends CRUDResource {
    static requiredParams: Array<string>;
    static routeBase: string;
    list(data?: SubscriptionsListParams, callback?: ResponseCallback<ResponseSubscriptions>, storeId?: string): Promise<ResponseSubscriptions>;
    create(data: SubscriptionCreateParams, callback?: ResponseCallback<ResponseSubscription>): Promise<ResponseSubscription>;
    get(storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseSubscription>): Promise<ResponseSubscription>;
    delete(storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ErrorResponse>): Promise<ErrorResponse>;
    charges(storeId: string, id: string, data?: ChargesListParams, callback?: ResponseCallback<ResponseCharges>): Promise<ResponseCharges>;
}
