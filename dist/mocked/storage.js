"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockedStorageApi() {
    return {
        clear: function () {
            window.localStorage.clear();
            console.debug("storage.clear()");
        },
        remove: function (key) {
            window.localStorage.removeItem(key);
            console.debug("storage.remove(" + key + ")");
        },
        exists: function (key) {
            var result = window.localStorage.getItem(key) !== null;
            console.debug("storage.exists(" + key + "): " + result);
            return result;
        },
        get: function (key, _default) {
            var value = window.localStorage.getItem(key);
            if (value === null) {
                value = _default;
            }
            if (_default === undefined) {
                console.debug("storage.get(" + key + "): " + value);
            }
            else {
                console.debug("storage.get(" + key + ", " + _default + "): " + value);
            }
            return value;
        },
        set: function (key, value) {
            window.localStorage.setItem(key, value);
            console.debug("storage.set(" + key + ", " + value + ")");
        },
    };
}
exports.default = mockedStorageApi;
;
