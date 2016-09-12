"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CRUDResource_1 = require("./CRUDResource");
var transfer_1 = require("../validation/schemas/transfer");

var Transfers = function (_CRUDResource_1$CRUDR) {
    _inherits(Transfers, _CRUDResource_1$CRUDR);

    function Transfers() {
        _classCallCheck(this, Transfers);

        var _this = _possibleConstructorReturn(this, _CRUDResource_1$CRUDR.apply(this, arguments));

        _this._finalizeTransfer = _this.defineRoute("PATCH", "/merchants/:merchantId/transfers/:id/finalize");
        _this._getTransfersPendingMerchants = _this.defineRoute("GET", "/transfers_pending");
        _this._getMerchantPendingTransfers = _this.defineRoute("GET", "/merchants/:merchantId/transfers_pending");
        return _this;
    }

    Transfers.prototype.list = function list(callback, data, merchantId, token) {
        var params = { merchantId: merchantId };
        return this._listRoute(params, data, callback, { token: token });
    };

    Transfers.prototype.create = function create(data, callback, merchantId, token) {
        var params = { merchantId: merchantId };
        return this._createRoute(params, data, callback, { token: token, validationSchema: transfer_1.transferCreateSchema });
    };

    Transfers.prototype.get = function get(id, callback, merchantId, token) {
        var params = { id: id, merchantId: merchantId };
        return this._getRoute(params, null, callback, { token: token });
    };

    Transfers.prototype.update = function update(id, data, callback, merchantId, token) {
        var params = { id: id, merchantId: merchantId };
        return this._updateRoute(params, data, callback, { token: token, validationSchema: transfer_1.transferUpdateSchema });
    };

    Transfers.prototype.finalizeTransfer = function finalizeTransfer(id, callback, merchantId, token) {
        var params = { id: id, merchantId: merchantId };
        return this._finalizeTransfer(params, null, callback, { token: token });
    };

    Transfers.prototype.getTransfersPendingMerchants = function getTransfersPendingMerchants(merchantId, callback, data, token) {
        var params = { merchantId: merchantId };
        return this._getTransfersPendingMerchants(params, data, callback, { token: token });
    };

    Transfers.prototype.getMerchantPendingTransfers = function getMerchantPendingTransfers(merchantId, callback, data, token) {
        var params = { merchantId: merchantId };
        return this._getMerchantPendingTransfers(params, data, callback, { token: token, validationSchema: transfer_1.transferPendingMerchantsSchema });
    };

    return Transfers;
}(CRUDResource_1.CRUDResource);

Transfers.routeBase = "/(merchants/:merchantId/)transfers";
exports.Transfers = Transfers;
//# sourceMappingURL=Transfers.js.map