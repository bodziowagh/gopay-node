"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericError_1 = require("./GenericError");
var RequestParameterError = (function (_super) {
    __extends(RequestParameterError, _super);
    function RequestParameterError(parameter) {
        var _this = _super.call(this) || this;
        _this.parameter = parameter;
        return _this;
    }
    return RequestParameterError;
}(GenericError_1.GenericError));
exports.RequestParameterError = RequestParameterError;
//# sourceMappingURL=RequestParameterError.js.map