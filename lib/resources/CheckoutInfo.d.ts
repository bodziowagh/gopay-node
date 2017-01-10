import { ResponseCallback, AuthParams } from "../api/RestAPI";
import { Resource } from "./Resource";
import { ProcessingMode } from "./common/ProcessingMode";
export interface CheckoutInfoParams extends AuthParams {
    origin: string;
}
export interface CheckoutColors {
    mainBackground: string;
    secondaryBackground: string;
    mainColor: string;
    mainText: string;
    primaryText: string;
    secondaryText: string;
    baseText: string;
}
export interface CheckoutInfoItem {
    mode: ProcessingMode;
    subscriptions: boolean;
    name: string;
    paymentTypes: Array<string>;
    logoImage?: string;
    theme: {
        dark: boolean;
        colors: CheckoutColors;
    };
}
export declare type ResponseCheckoutInfo = CheckoutInfoItem;
export declare class CheckoutInfo extends Resource {
    get(data: CheckoutInfoParams, callback?: ResponseCallback<ResponseCheckoutInfo>): Promise<ResponseCheckoutInfo>;
}
