"use strict";
var RestAPI_1 = require("./api/RestAPI");
var PaymentsSDK = (function () {
    function PaymentsSDK(options) {
        this.api = new RestAPI_1.RestAPI(options);
    }
    return PaymentsSDK;
}());
exports.PaymentsSDK = PaymentsSDK;
//# sourceMappingURL=PaymentsSDK.js.map