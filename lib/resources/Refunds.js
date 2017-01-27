"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Refunds = (function (_super) {
    __extends(Refunds, _super);
    function Refunds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refunds.prototype.list = function (storeId, chargeId, data, callback) {
        return this._listRoute()(data, callback, ["storeId", "chargeId"], storeId, chargeId);
    };
    Refunds.prototype.create = function (storeId, chargeId, data, callback) {
        return this._createRoute(Refunds.requiredParams)(data, callback, ["storeId", "chargeId"], storeId, chargeId);
    };
    Refunds.prototype.get = function (storeId, chargeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "chargeId", "id"], storeId, chargeId, id);
    };
    return Refunds;
}(CRUDResource_1.CRUDResource));
Refunds.requiredParams = ["amount", "currency"];
Refunds.routeBase = "/stores/:storeId/charges/:chargeId/refunds";
exports.Refunds = Refunds;
//# sourceMappingURL=Refunds.js.map