"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var TransactionTokens = (function (_super) {
    __extends(TransactionTokens, _super);
    function TransactionTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionTokens.prototype.create = function (data, callback) {
        return this.defineRoute("POST", "/tokens", TransactionTokens.requiredParams)(data, callback);
    };
    TransactionTokens.prototype.get = function (storeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    return TransactionTokens;
}(CRUDResource_1.CRUDResource));
TransactionTokens.requiredParams = ["paymentType", "subscription", "email", "amount", "currency", "data"];
TransactionTokens.routeBase = "/stores/:storeId/tokens";
exports.TransactionTokens = TransactionTokens;
//# sourceMappingURL=TransactionTokens.js.map