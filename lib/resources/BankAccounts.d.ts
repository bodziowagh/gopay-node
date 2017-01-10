import { ResponseCallback, ErrorResponse, AuthParams } from "../api/RestAPI";
import { CRUDResource, CRUDPaginationParams, CRUDSortingParams, CRUDItemsResponse } from "./CRUDResource";
export declare type BankAccountsSortBy = "createdOn";
export interface BankAccountsListParams extends CRUDPaginationParams, CRUDSortingParams<BankAccountsSortBy>, AuthParams {
    primary?: boolean;
}
export interface BankAccountCreateParams extends AuthParams {
    accountNumber: string;
    country: string;
    currency: string;
    holderName: string;
    bankName: string;
    branchName?: string;
    bankAddress?: string;
    routingNumber?: string;
    swiftCode?: string;
    ifscCode?: string;
    routingCode?: string;
}
export interface BankAccountUpdateParams extends AuthParams {
    primary?: boolean;
    accountNumber?: string;
    holderName?: string;
    bankAddress?: string;
    currency?: string;
    bankName: string;
    branchName?: string;
    routingNumber?: string;
    swiftCode?: string;
    ifscCode?: string;
    routingCode?: string;
}
export interface BankAccountItem {
    id: string;
    holderName: string;
    bankName: string;
    branchName?: string;
    country: string;
    bankAddress?: string;
    currency: string;
    routingNumber?: string;
    swiftCode?: string;
    ifscCode?: string;
    routingCode?: string;
    lastFour: string;
    status: string;
    createdOn: number;
    primary: boolean;
    accountNumber: string;
}
export declare type ResponseBankAccount = BankAccountItem;
export declare type ResponseBankAccounts = CRUDItemsResponse<BankAccountItem>;
export declare class BankAccounts extends CRUDResource {
    static requiredParams: Array<string>;
    static routeBase: string;
    list(data?: BankAccountsListParams, callback?: ResponseCallback<ResponseBankAccounts>): Promise<ResponseBankAccounts>;
    create(data: BankAccountCreateParams, callback?: ResponseCallback<ResponseBankAccount>): Promise<ResponseBankAccount>;
    get(id: string, data?: AuthParams, callback?: ResponseCallback<ResponseBankAccount>): Promise<ResponseBankAccount>;
    update(id: string, data?: BankAccountUpdateParams, callback?: ResponseCallback<ResponseBankAccount>): Promise<ResponseBankAccount>;
    delete(id: string, data?: AuthParams, callback?: ResponseCallback<ErrorResponse>): Promise<ErrorResponse>;
    getPrimary(data?: AuthParams, callback?: ResponseCallback<ResponseBankAccount>): Promise<ResponseBankAccount>;
}
