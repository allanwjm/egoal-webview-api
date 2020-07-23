"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appApi() {
    var api = __WEBVIEW_API_APP__;
    return {
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
        getAppVersionCode: function () {
            return api.getAppVersionCode();
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
