import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { CRUDResource } from "./CRUDResource";
import { ConfigurationItem } from "./common/Configuration";
export interface MerchantItem {
    id: string;
    verificationDataId?: string;
    name: string;
    email: string;
    roles: Array<string>;
    verified: boolean;
    createdOn: number;
    configuration: ConfigurationItem;
}
export declare type ResponseMerchant = MerchantItem;
export interface MerchantBanParams {
    reason: string;
}
export declare class Merchants extends CRUDResource {
    me(data?: AuthParams, callback?: ResponseCallback<ResponseMerchant>): Promise<ResponseMerchant>;
}
