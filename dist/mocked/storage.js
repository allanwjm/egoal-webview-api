"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedStorageApi = {
    clear: function () {
        window.localStorage.clear();
        console.debug("storageApi.clear()");
    },
    remove: function (key) {
        window.localStorage.removeItem(key);
        console.debug("storageApi.remove(" + key + ")");
    },
    exists: function (key) {
        var result = window.localStorage.getItem(key) !== null;
        console.debug("storageApi.exists(" + key + "): " + result);
        return result;
    },
    get: function (key, _default) {
        var value = window.localStorage.getItem(key);
        if (value === null) {
            value = _default;
        }
        if (_default === undefined) {
            console.debug("storageApi.get(" + key + "): " + value);
        }
        else {
            console.debug("storageApi.get(" + key + ", " + _default + "): " + value);
        }
        return value;
    },
    set: function (key, value) {
        window.localStorage.setItem(key, value);
        console.debug("storageApi.set(" + key + ", " + value + ")");
    },
};
exports.default = mockedStorageApi;
