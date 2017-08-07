import { ResponseCallback, AuthParams } from "../api/RestAPI"
import { Resource } from "./Resource"
import { ProcessingMode } from "./common/ProcessingMode"
import { CardBrand } from "./common/CardBrand"
import { PlatformItem, PlatformConfiguration as PlatformConfig } from "./common/Platform"
import { WithConfig } from "./common/Common"

/* Request */

/* Response */
export interface PlatformConfigurationItem extends PlatformItem, WithConfig<PlatformConfig> {
    supportedPaymentTypes?: Array<string>
    supportedCardBrands?: Array<CardBrand>
    supportedGateways?: Array<string>
}

export type ResponsePlatformConfigurationInfo = Readonly<PlatformConfigurationItem>

export class PlatformConfiguration extends Resource {

    public get(data?: any, callback?: ResponseCallback<ResponsePlatformConfigurationInfo>): Promise<ResponsePlatformConfigurationInfo> {
        return this.defineRoute("GET", "/platform")(data, callback)
    }

}
