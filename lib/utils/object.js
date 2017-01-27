"use strict";
function transformKeys(obj, transformer) {
    return Object.keys(obj || {}).reduce(function (r, k) {
        var c = function (o) { return typeof o === "object" && Boolean(o); };
        var v = obj[k];
        if (c(v)) {
            if (Array.isArray(v)) {
                v = v.map(function (i) { return c(i) ? transformKeys(i, transformer) : i; });
            }
            else {
                v = transformKeys(v, transformer);
            }
        }
        r[transformer(k)] = v;
        return r;
    }, {});
}
exports.transformKeys = transformKeys;
function missingKeys(obj, keys) {
    if (keys === void 0) { keys = []; }
    if (!obj) {
        return keys;
    }
    if (obj.constructor !== {}.constructor) {
        return [];
    }
    var objKeys = Object.keys(obj || {});
    var missing = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (objKeys.indexOf(key) === -1 || obj[key] === undefined) {
            missing.push(key);
        }
    }
    return missing;
}
exports.missingKeys = missingKeys;
function partitionKeys(obj, condition) {
    var left = {};
    var right = {};
    Object.keys(obj || {}).forEach(function (k) {
        if (condition(k)) {
            left[k] = obj[k];
        }
        else {
            right[k] = obj[k];
        }
    });
    return [left, right];
}
exports.partitionKeys = partitionKeys;
//# sourceMappingURL=object.js.map