"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var WebHooks = (function (_super) {
    __extends(WebHooks, _super);
    function WebHooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebHooks.prototype.list = function (storeId, data, callback) {
        return this._listRoute()(data, callback, ["storeId"], storeId);
    };
    WebHooks.prototype.create = function (storeId, data, callback) {
        return this._createRoute(WebHooks.requiredParams)(data, callback, ["storeId"], storeId);
    };
    WebHooks.prototype.get = function (storeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    WebHooks.prototype.update = function (storeId, id, data, callback) {
        return this._updateRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    WebHooks.prototype.delete = function (storeId, id, data, callback) {
        return this._deleteRoute()(data, callback, ["storeId", "id"], storeId, id);
    };
    return WebHooks;
}(CRUDResource_1.CRUDResource));
WebHooks.requiredParams = ["triggers", "url"];
WebHooks.routeBase = "/stores/:storeId/webhooks";
exports.WebHooks = WebHooks;
//# sourceMappingURL=WebHooks.js.map