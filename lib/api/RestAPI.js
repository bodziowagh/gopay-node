"use strict";
require("isomorphic-fetch");
var process = require("process");
var decamelize = require("decamelize");
var constants_1 = require("../constants");
var object_1 = require("../utils/object");
var fetch_1 = require("../utils/fetch");
var TimeoutError_1 = require("../errors/TimeoutError");
var parser_1 = require("../errors/parser");
var RestAPI = (function () {
    function RestAPI(options) {
        if (options === void 0) { options = {}; }
        this.endpoint = options.endpoint || process.env[constants_1.ENV_KEY_ENDPOINT] || constants_1.DEFAULT_ENDPOINT;
        this.appId = options.appId || process.env[constants_1.ENV_KEY_APP_ID];
        this.secret = options.secret || process.env[constants_1.ENV_KEY_SECRET];
    }
    RestAPI.requestParams = function (params) {
        return object_1.transformKeys(params, decamelize);
    };
    RestAPI.requestUrl = function (url, data, isQueryString) {
        var queryString;
        if (isQueryString) {
            queryString = Object.keys(data || {})
                .map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]); })
                .join("&");
        }
        return queryString ? url + "?" + queryString : url;
    };
    RestAPI.handleSuccess = function (response, resolve, callback) {
        if (typeof callback === "function") {
            callback(response);
        }
        resolve(response);
    };
    RestAPI.handleError = function (error, reject, callback) {
        var err = parser_1.fromError(error);
        if (typeof callback === "function") {
            callback(err);
        }
        reject(err);
    };
    RestAPI.getData = function (data) {
        return object_1.partitionKeys(data, function (k) { return ["appId", "secret"].indexOf(k) !== -1; });
    };
    RestAPI.prototype.getBody = function (data, payload) {
        var _a = RestAPI.getData(data), _ = _a[0], _data = _a[1];
        return !payload ? JSON.stringify(RestAPI.requestParams(_data)) : null;
    };
    RestAPI.prototype.getHeaders = function (data, body) {
        var _a = RestAPI.getData(data), _b = _a[0], appId = _b.appId, secret = _b.secret, _ = _a[1];
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        if (appId || this.appId) {
            headers.append("Authorization", "ApplicationToken " + (appId || this.appId) + "|" + (secret || this.secret || ""));
        }
        return headers;
    };
    RestAPI.prototype.send = function (method, url, data, callback) {
        var _this = this;
        var payload = ["GET", "DELETE"].indexOf(method) !== -1;
        var body = this.getBody(data, payload);
        var headers = this.getHeaders(data, body);
        var _a = (this.constructor.getData || RestAPI.getData)(data), _ = _a[0], _data = _a[1];
        return new Promise(function (resolve, reject) {
            var request = new Request("" + _this.endpoint + RestAPI.requestUrl(url, RestAPI.requestParams(_data), payload), {
                body: body,
                headers: headers,
                method: method,
                mode: "cors"
            });
            fetch(request)
                .then(fetch_1.checkStatus)
                .then(fetch_1.parseJSON)
                .then(function (response) { return RestAPI.handleSuccess(response, resolve, callback); })
                .catch(function (error) { return RestAPI.handleError(error, reject, callback); });
        });
    };
    RestAPI.prototype.longPolling = function (promise, condition, callback, interval, timeout) {
        if (interval === void 0) { interval = constants_1.POLLING_INTERVAL; }
        if (timeout === void 0) { timeout = constants_1.POLLING_TIMEOUT; }
        var elapsedTime = 0;
        function pollWait(wait) {
            return new Promise(function (resolve) { return setTimeout(function () {
                elapsedTime += wait;
                resolve();
            }, wait); });
        }
        function polling(creator) {
            if (creator === void 0) { creator = promise; }
            if (elapsedTime >= timeout) {
                return Promise.reject(new TimeoutError_1.TimeoutError(timeout));
            }
            return pollWait(interval)
                .then(creator)
                .then(function (response) {
                if (!condition(response)) {
                    return polling(creator);
                }
                return response;
            });
        }
        return new Promise(function (resolve, reject) {
            polling()
                .then(function (response) { return RestAPI.handleSuccess(response, resolve, callback); })
                .catch(function (error) { return RestAPI.handleError(error, reject, callback); });
        });
    };
    return RestAPI;
}());
exports.RestAPI = RestAPI;
//# sourceMappingURL=RestAPI.js.map