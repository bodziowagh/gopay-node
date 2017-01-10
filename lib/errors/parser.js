"use strict";

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var APIError_1 = require("./APIError");
var PathParameterError_1 = require("./PathParameterError");
var RequestParameterError_1 = require("./RequestParameterError");
var Code = require("./ErrorsConstants");
function getCodeByStatus(status) {
    var codeMap = {
        400: Code.BAD_REQUEST,
        401: Code.NOT_AUTHORIZED,
        403: Code.FORBIDDEN,
        404: Code.NOT_FOUND,
        405: Code.NOT_ALLOWED,
        409: Code.CONFLICTED,
        429: Code.TOO_MANY_REQUESTS,
        500: Code.INTERNAL_ERROR,
        503: Code.SERVICE_UNAVAILABLE
    };
    if (Object.keys(codeMap).indexOf(status.toString()) !== -1) {
        return codeMap[status];
    }
    return Code.UNKNOWN;
}
function fromError(error) {
    var errorResponse = void 0;
    if (error instanceof PathParameterError_1.PathParameterError) {
        var _ref;

        errorResponse = {
            code: Code.REQUEST_ERROR,
            errors: [(_ref = {}, _ref[error.parameter] = "required", _ref)]
        };
    } else if (error instanceof RequestParameterError_1.RequestParameterError) {
        errorResponse = {
            code: Code.VALIDATION_ERROR,
            errors: [{
                field: error.parameter,
                reason: "REQUIRED_VALUE"
            }]
        };
    } else if (error instanceof APIError_1.APIError) {
        errorResponse = {
            code: error.response ? error.response.code : getCodeByStatus(error.status),
            httpCode: error.status
        };
    }
    return __assign({ code: Code.UNKNOWN, errors: [], status: "error" }, errorResponse);
}
exports.fromError = fromError;
//# sourceMappingURL=parser.js.map