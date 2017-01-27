"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Resource_1 = require("./Resource");
var CheckoutInfo = (function (_super) {
    __extends(CheckoutInfo, _super);
    function CheckoutInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckoutInfo.prototype.get = function (data, callback) {
        return this.defineRoute("GET", "/checkout_info", ["origin"])(data, callback);
    };
    return CheckoutInfo;
}(Resource_1.Resource));
exports.CheckoutInfo = CheckoutInfo;
//# sourceMappingURL=CheckoutInfo.js.map