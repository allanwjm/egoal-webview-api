"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storageApi() {
    var api = __WEBVIEW_API_STORAGE__;
    return {
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
            if (value === undefined || value === null) {
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
}
exports.default = storageApi;
;
