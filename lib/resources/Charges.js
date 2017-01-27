"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Charges = (function (_super) {
    __extends(Charges, _super);
    function Charges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Charges.prototype.list = function (storeId, data, callback) {
        return this._listRoute()(data, callback, ["storeId"], storeId);
    };
    Charges.prototype.create = function (data, callback) {
        return this.defineRoute("POST", "/charges", Charges.requiredParams)(data, callback);
    };
    Charges.prototype.get = function (storeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    Charges.prototype.poll = function (storeId, id, data, callback) {
        var _this = this;
        var promise = function () { return _this._getRoute()(data, null, ["storeId", "id"], storeId, id); };
        return this.api.longPolling(promise, function (response) { return response.status !== "pending"; }, callback);
    };
    return Charges;
}(CRUDResource_1.CRUDResource));
Charges.requiredParams = ["transactionTokenId", "amount", "currency"];
Charges.routeBase = "/stores/:storeId/charges";
exports.Charges = Charges;
//# sourceMappingURL=Charges.js.map