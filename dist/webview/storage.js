"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = __WEBVIEW_API_STORAGE__;
var storageApi = {
    clear: function () {
        api.clear();
    },
    remove: function (key) {
        api.remove(key);
    },
    exists: function (key) {
        return api.get(key) !== null;
    },
    get: function (key, _default) {
        var value = api.get(key);
        if (value === null) {
            return _default;
        }
        else {
            return value;
        }
    },
    set: function (key, value) {
        api.set(key, value);
    },
};
exports.default = storageApi;
