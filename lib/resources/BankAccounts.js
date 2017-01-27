"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var BankAccounts = (function (_super) {
    __extends(BankAccounts, _super);
    function BankAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankAccounts.prototype.list = function (data, callback) {
        return this._listRoute()(data, callback);
    };
    BankAccounts.prototype.create = function (data, callback) {
        return this._createRoute(BankAccounts.requiredParams)(data, callback);
    };
    BankAccounts.prototype.get = function (id, data, callback) {
        return this._getRoute()(data, callback, ["id"], id);
    };
    BankAccounts.prototype.update = function (id, data, callback) {
        return this._updateRoute()(data, callback, ["id"], id);
    };
    BankAccounts.prototype.delete = function (id, data, callback) {
        return this._deleteRoute()(data, callback, ["id"], id);
    };
    BankAccounts.prototype.getPrimary = function (data, callback) {
        return this.defineRoute("GET", this._routeBase + "/primary")(data, callback);
    };
    return BankAccounts;
}(CRUDResource_1.CRUDResource));
BankAccounts.requiredParams = ["accountNumber", "country", "currency", "holderName", "bankName"];
BankAccounts.routeBase = "/bank_accounts";
exports.BankAccounts = BankAccounts;
//# sourceMappingURL=BankAccounts.js.map