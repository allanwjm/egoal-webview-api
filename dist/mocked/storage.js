"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedStorageApi = {
    clear: function () {
        console.debug("storage.clear()");
        window.localStorage.clear();
    },
    remove: function (key) {
        console.debug("storage.remove()");
        window.localStorage.removeItem(key);
    },
    exists: function (key) {
        console.debug("storage.exists()");
        return window.localStorage.getItem(key) !== null;
    },
    get: function (key, _default) {
        console.debug("storage.get()");
        var value = window.localStorage.getItem(key);
        if (value === null) {
            return _default;
        }
        else {
            return value;
        }
    },
    set: function (key, value) {
        console.debug("storage.set()");
        window.localStorage.setItem(key, value);
    },
};
exports.default = mockedStorageApi;
