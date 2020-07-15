"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webviewApp = void 0;
var api = window["__WEBVIEW_API__"];
exports.webviewApp = {
    isWebviewApp: function () {
        return true;
    },
    getIMEI: function () {
        return api.getIMEI();
    },
    getSerialNumber: function () {
        return api.getSerialNumber();
    },
    getAppVersion: function () {
        return api.getAppVersion();
    },
    restartApp: function () {
        api.restartApp();
    },
    lockScreen: function () {
        api.lockScreen();
    },
    unlockScreen: function () {
        api.unlockScreen();
    },
    getBrightness: function () {
        return api.getBrightness();
    },
    setBrightness: function (brightness) {
        api.setBrightness();
    },
    getVolume: function () {
        return api.getVolume();
    },
    setVolume: function (volume) {
        api.setVolume(volume);
    },
};
