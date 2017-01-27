"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Transfers = (function (_super) {
    __extends(Transfers, _super);
    function Transfers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transfers.prototype.list = function (data, callback) {
        return this._listRoute()(data, callback);
    };
    Transfers.prototype.get = function (id, data, callback) {
        return this._getRoute()(data, callback, ["id"], id);
    };
    return Transfers;
}(CRUDResource_1.CRUDResource));
Transfers.routeBase = "/transfers";
exports.Transfers = Transfers;
//# sourceMappingURL=Transfers.js.map