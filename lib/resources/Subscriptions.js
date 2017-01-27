"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Subscriptions = (function (_super) {
    __extends(Subscriptions, _super);
    function Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subscriptions.prototype.list = function (data, callback, storeId) {
        return this.defineRoute("GET", "(/stores/:storeId)/subscriptions")(data, callback, ["storeId"], storeId);
    };
    Subscriptions.prototype.create = function (data, callback) {
        return this.defineRoute("POST", "/subscriptions", Subscriptions.requiredParams)(data, callback);
    };
    Subscriptions.prototype.get = function (storeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    Subscriptions.prototype.delete = function (storeId, id, data, callback) {
        return this._deleteRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    Subscriptions.prototype.charges = function (storeId, id, data, callback) {
        return this.defineRoute("GET", Subscriptions.routeBase + "/:id/charges")(data, callback, ["storeId", "id"], storeId, id);
    };
    return Subscriptions;
}(CRUDResource_1.CRUDResource));
Subscriptions.requiredParams = ["token", "amount", "currency", "period"];
Subscriptions.routeBase = "/stores/:storeId/subscriptions";
exports.Subscriptions = Subscriptions;
//# sourceMappingURL=Subscriptions.js.map