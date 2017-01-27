"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Ledgers = (function (_super) {
    __extends(Ledgers, _super);
    function Ledgers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ledgers.prototype.list = function (transferId, data, callback) {
        return this._listRoute()(data, callback, ["transferId"], transferId);
    };
    return Ledgers;
}(CRUDResource_1.CRUDResource));
Ledgers.routeBase = "/transfers/:transferId/ledgers";
exports.Ledgers = Ledgers;
//# sourceMappingURL=Ledgers.js.map