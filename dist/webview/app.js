"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var callbacks_1 = require("./callbacks");
function appApi() {
    // @ts-ignore
    var api = __WEBVIEW_API_APP__;
    api.__CALLBACK_GET_IMEI__ = callbacks_1.simpleCallback;
    api.__CALLBACK_GET_SN__ = callbacks_1.simpleCallback;
    return {
        isWebviewApp: function () {
            return true;
        },
        getIMEI: function (method) {
            if (method === void 0) { method = 0; }
            return new Promise(function (resolve) {
                var uuid = api.getIMEI(method);
                callbacks_1.pushResolve(uuid, resolve);
            });
        },
        getSerialNumber: function (method) {
            if (method === void 0) { method = 0; }
            return new Promise(function (resolve) {
                var uuid = api.getSerialNumber(method);
                callbacks_1.pushResolve(uuid, resolve);
            });
        },
        getDeviceMetadata: function () {
            var metadataJson = api.getDeviceMetadata();
            return JSON.parse(metadataJson);
        },
        getAppVersion: function () {
            return api.getAppVersion();
        },
        getAppVersionCode: function () {
            return api.getAppVersionCode();
        },
        restartApp: function () {
            api.restartApp();
        },
        quitApp: function () {
            api.quitApp();
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
            api.setBrightness(brightness);
        },
        getVolume: function () {
            return api.getVolume();
        },
        setVolume: function (volume) {
            api.setVolume(volume);
        },
        setStatusBarColor: function (color) {
            api.setStatusBarColor(color);
        },
    };
}
exports.default = appApi;
;
