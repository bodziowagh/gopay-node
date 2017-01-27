"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Stores = (function (_super) {
    __extends(Stores, _super);
    function Stores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stores.prototype.list = function (data, callback) {
        return this._listRoute()(data, callback);
    };
    Stores.prototype.create = function (data, callback) {
        return this._createRoute(Stores.requiredParams)(data, callback);
    };
    Stores.prototype.get = function (id, data, callback) {
        return this._getRoute()(data, callback, ["id"], id);
    };
    Stores.prototype.update = function (id, data, callback) {
        return this._updateRoute()(data, callback, ["id"], id);
    };
    Stores.prototype.delete = function (id, data, callback) {
        return this._deleteRoute()(data, callback, ["id"], id);
    };
    return Stores;
}(CRUDResource_1.CRUDResource));
Stores.requiredParams = ["name"];
Stores.routeBase = "/stores";
exports.Stores = Stores;
//# sourceMappingURL=Stores.js.map