"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUDResource_1 = require("./CRUDResource");

var TransactionTokens = function (_CRUDResource_1$CRUDR) {
    (0, _inherits3.default)(TransactionTokens, _CRUDResource_1$CRUDR);

    function TransactionTokens() {
        (0, _classCallCheck3.default)(this, TransactionTokens);
        return (0, _possibleConstructorReturn3.default)(this, _CRUDResource_1$CRUDR.apply(this, arguments));
    }

    TransactionTokens.prototype.create = function create(data, callback) {
        return this.defineRoute("POST", "/tokens", TransactionTokens.requiredParams)(data, callback);
    };

    TransactionTokens.prototype.get = function get(storeId, id, data, callback) {
        return this._getRoute()(data, callback, ["storeId", "id"], storeId, id);
    };

    TransactionTokens.prototype.delete = function _delete(storeId, id, data, callback) {
        return this._deleteRoute()(data, callback, ["storeId", "id"], storeId, id);
    };

    return TransactionTokens;
}(CRUDResource_1.CRUDResource);

TransactionTokens.requiredParams = ["paymentType", "subscription", "email", "amount", "currency", "data"];
TransactionTokens.routeBase = "/stores/:storeId/tokens";
exports.TransactionTokens = TransactionTokens;
//# sourceMappingURL=TransactionTokens.js.map