import { RestAPIOptions } from "./api/RestAPI";
import { PaymentsSDK } from "./PaymentsSDK";
import { BankAccounts } from "./resources/BankAccounts";
import { Charges } from "./resources/Charges";
import { CheckoutInfo } from "./resources/CheckoutInfo";
import { Merchants } from "./resources/Merchants";
import { Ledgers } from "./resources/Ledgers";
import { Refunds } from "./resources/Refunds";
import { Stores } from "./resources/Stores";
import { Subscriptions } from "./resources/Subscriptions";
import { TransactionTokens } from "./resources/TransactionTokens";
import { Transfers } from "./resources/Transfers";
import { Verification } from "./resources/Verification";
import { WebHooks } from "./resources/WebHooks";
export default class SDK extends PaymentsSDK {
    bankAccounts: BankAccounts;
    charges: Charges;
    checkoutInfo: CheckoutInfo;
    merchants: Merchants;
    ledgers: Ledgers;
    refunds: Refunds;
    stores: Stores;
    subscriptions: Subscriptions;
    transactionTokens: TransactionTokens;
    transfers: Transfers;
    verification: Verification;
    webHooks: WebHooks;
    constructor(options?: RestAPIOptions);
}
