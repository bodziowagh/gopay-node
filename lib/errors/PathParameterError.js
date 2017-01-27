"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericError_1 = require("./GenericError");
var PathParameterError = (function (_super) {
    __extends(PathParameterError, _super);
    function PathParameterError(parameter) {
        var _this = _super.call(this) || this;
        _this.parameter = parameter;
        return _this;
    }
    return PathParameterError;
}(GenericError_1.GenericError));
exports.PathParameterError = PathParameterError;
//# sourceMappingURL=PathParameterError.js.map