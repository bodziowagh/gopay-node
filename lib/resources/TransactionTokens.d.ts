import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource } from "./CRUDResource";
import { ProcessingMode } from "./common/ProcessingMode";
export interface TransactionTokenCardData {
    cardholder: string;
    cardNumber: string;
    expMonth: number | string;
    expYear: number | string;
    cvv: string;
    line1?: string;
    line2?: string;
    state?: string;
    city?: string;
    country?: string;
    zip?: string;
}
export interface TransactionTokenQRScanData {
    scannedQR: string;
}
export interface TransactionTokenCreateParams extends AuthParams {
    paymentType: string;
    subscription: boolean;
    email: string;
    amount: number;
    currency: string;
    data: TransactionTokenCardData | TransactionTokenQRScanData;
}
export interface TransactionTokenCardDataItem {
    cardholder: string;
    expMonth: number;
    expYear: number;
    lastFour: string;
    brand: string;
    name?: string;
    line1?: string;
    line2?: string;
    state?: string;
    city?: string;
    country?: string;
    zip?: string;
}
export interface TransactionTokenQRScanDataItem {
}
export interface TransactionTokenItem {
    id: string;
    storeId: string;
    email: string;
    mode: ProcessingMode;
    subscription: boolean;
    createdOn: number;
    lastUsedOn: number;
    paymentType: string;
    data: TransactionTokenCardDataItem | TransactionTokenQRScanDataItem;
}
export declare type ResponseTransactionToken = TransactionTokenItem;
export declare class TransactionTokens extends CRUDResource {
    static requiredParams: Array<string>;
    static routeBase: string;
    create(data: TransactionTokenCreateParams, callback?: ResponseCallback<ResponseTransactionToken>): Promise<ResponseTransactionToken>;
    get(storeId: string, id: string, data?: AuthParams, callback?: ResponseCallback<ResponseTransactionToken>): Promise<ResponseTransactionToken>;
}
