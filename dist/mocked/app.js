"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedAppApi = {
    isWebviewApp: function () {
        console.debug("app.isWebviewApp()");
        return false;
    },
    getIMEI: function () {
        console.debug("app.getIMEI()");
        return "__MOCKED_IMEI__";
    },
    getSerialNumber: function () {
        console.debug("app.getSerialNumber()");
        return "__MOCKED_SN__";
    },
    getAppVersion: function () {
        console.debug("app.getAppVersion()");
        return "__MOCKED_VERSION__";
    },
    getAppVersionCode: function () {
        console.debug("app.getAppVersionCode()");
        return 0;
    },
    restartApp: function () {
        console.debug("app.restartApp()");
        alert("Mocked: 重启 APP");
    },
    lockScreen: function () {
        console.debug("app.lockScreen()");
        alert("Mocked: 锁屏");
    },
    unlockScreen: function () {
        console.debug("app.unlockScreen()");
        alert("Mocked: 解锁屏幕");
    },
    getBrightness: function () {
        console.debug("app.getBrightness()");
        return -1;
    },
    setBrightness: function (brightness) {
        console.debug("app.setBrightness()");
    },
    getVolume: function () {
        console.debug("app.getVolume");
        return -1;
    },
    setVolume: function (volume) {
        console.debug("app.setVolume()");
    },
};
exports.default = mockedAppApi;
