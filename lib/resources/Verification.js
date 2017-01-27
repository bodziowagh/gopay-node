"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CRUDResource_1 = require("./CRUDResource");
var Verification = (function (_super) {
    __extends(Verification, _super);
    function Verification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Verification.prototype.create = function (data, callback) {
        return this._createRoute(Verification.requiredParams)(data, callback);
    };
    Verification.prototype.get = function (data, callback) {
        return this.defineRoute("GET", this._routeBase)(data, callback);
    };
    Verification.prototype.update = function (data, callback) {
        return this.defineRoute("PATCH", this._routeBase)(data, callback);
    };
    return Verification;
}(CRUDResource_1.CRUDResource));
Verification.requiredParams = [
    "homepageUrl", "companyDescription", "companyContactInfo", "businessType", "systemManagerName"
];
Verification.routeBase = "/verification";
exports.Verification = Verification;
//# sourceMappingURL=Verification.js.map