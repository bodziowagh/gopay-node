"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericError_1 = require("./GenericError");
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError(timeout) {
        var _this = _super.call(this) || this;
        _this.timeout = timeout;
        return _this;
    }
    return TimeoutError;
}(GenericError_1.GenericError));
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=TimeoutError.js.map