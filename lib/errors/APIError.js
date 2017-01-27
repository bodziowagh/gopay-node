"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericError_1 = require("./GenericError");
var APIError = (function (_super) {
    __extends(APIError, _super);
    function APIError(status, response, route) {
        var _this = _super.call(this) || this;
        _this.status = status;
        _this.response = Object.keys(response).length !== 0 ? response : null;
        return _this;
    }
    return APIError;
}(GenericError_1.GenericError));
exports.APIError = APIError;
//# sourceMappingURL=APIError.js.map