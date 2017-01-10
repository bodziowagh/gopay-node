"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUDResource_1 = require("./CRUDResource");

var Ledgers = function (_CRUDResource_1$CRUDR) {
    (0, _inherits3.default)(Ledgers, _CRUDResource_1$CRUDR);

    function Ledgers() {
        (0, _classCallCheck3.default)(this, Ledgers);
        return (0, _possibleConstructorReturn3.default)(this, _CRUDResource_1$CRUDR.apply(this, arguments));
    }

    Ledgers.prototype.list = function list(transferId, data, callback) {
        return this._listRoute()(data, callback, ["transferId"], transferId);
    };

    return Ledgers;
}(CRUDResource_1.CRUDResource);

Ledgers.routeBase = "/transfers/:transferId/ledgers";
exports.Ledgers = Ledgers;
//# sourceMappingURL=Ledgers.js.map