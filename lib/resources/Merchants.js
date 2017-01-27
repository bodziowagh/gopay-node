"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Merchants = (function (_super) {
    __extends(Merchants, _super);
    function Merchants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Merchants.prototype.me = function (data, callback) {
        return this.defineRoute("GET", "/me")(data, callback);
    };
    return Merchants;
}(CRUDResource_1.CRUDResource));
exports.Merchants = Merchants;
//# sourceMappingURL=Merchants.js.map