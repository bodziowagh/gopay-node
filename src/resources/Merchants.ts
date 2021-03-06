import { ResponseCallback, AuthParams } from "../api/RestAPI"
import { CRUDResource } from "./CRUDResource"
import { ConfigurationItem } from "./common/Configuration"
import { RecurringTokenPrivilege } from "./Verification"
import { TransferSchedule } from "./common/TransferSchedule"

/* Request */

/* Response */
export interface RecurringTokenConfiguration {
    recurringType?: RecurringTokenPrivilege
    chargeWaitPeriod?: string
}

export interface SecurityConfiguration {
    inspectSuspiciousLoginAfter?: string
}

export interface MerchantConfigurationItem extends ConfigurationItem {
    waitPeriod?: string
    transferSchedule?: TransferSchedule
    recurringTokenConfiguration?: RecurringTokenConfiguration
    securityConfiguration?: SecurityConfiguration
    language?: string
}

export interface MerchantItem {
    id: string
    verificationDataId?: string
    name: string
    email: string
    verified: boolean
    createdOn: string
    configuration: MerchantConfigurationItem
}

export type ResponseMerchant = MerchantItem

export interface MerchantBanParams {
    reason: string
}

export class Merchants extends CRUDResource {

    public me(data?: AuthParams, callback?: ResponseCallback<ResponseMerchant>): Promise<ResponseMerchant> {
        return this.defineRoute("GET", "/me")(data, callback)
    }

}
