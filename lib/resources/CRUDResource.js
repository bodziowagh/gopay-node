"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Resource_1 = require("./Resource");
var CRUDResource = (function (_super) {
    __extends(CRUDResource, _super);
    function CRUDResource(api) {
        var _this = _super.call(this, api) || this;
        _this._routeBase = _this.constructor.routeBase;
        return _this;
    }
    CRUDResource.prototype._listRoute = function (required) {
        return this.defineRoute("GET", this._routeBase, required);
    };
    CRUDResource.prototype._createRoute = function (required) {
        return this.defineRoute("POST", this._routeBase, required);
    };
    CRUDResource.prototype._getRoute = function (required) {
        return this.defineRoute("GET", this._routeBase + "/:id", required);
    };
    CRUDResource.prototype._updateRoute = function (required) {
        return this.defineRoute("PATCH", this._routeBase + "/:id", required);
    };
    CRUDResource.prototype._deleteRoute = function (required) {
        return this.defineRoute("DELETE", this._routeBase + "/:id", required);
    };
    return CRUDResource;
}(Resource_1.Resource));
exports.CRUDResource = CRUDResource;
//# sourceMappingURL=CRUDResource.js.map