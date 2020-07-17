"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedAppApi = {
    isWebviewApp: function () {
        console.debug("appApi.isWebviewApp(): " + false);
        return false;
    },
    getIMEI: function () {
        var imei = "__MOCKED_IMEI__";
        console.debug("appApi.getIMEI(): " + imei);
        return imei;
    },
    getSerialNumber: function () {
        var sn = "__MOCKED_SN__";
        console.debug("appApi.getSerialNumber(): " + sn);
        return sn;
    },
    getAppVersion: function () {
        var version = "__MOCKED_VERSION__";
        console.debug("appApi.getAppVersion(): " + version);
        return version;
    },
    getAppVersionCode: function () {
        var version = 0;
        console.debug("appApi.getAppVersionCode(): " + version);
        return version;
    },
    restartApp: function () {
        alert("Mocked: restartApp()");
        console.debug("appApi.restartApp()");
    },
    lockScreen: function () {
        alert("Mocked: lockScreen()");
        console.debug("appApi.lockScreen()");
    },
    unlockScreen: function () {
        alert("Mocked: unlockScreen()");
        console.debug("appApi.unlockScreen()");
    },
    getBrightness: function () {
        var brightness = 0;
        console.debug("appApi.getBrightness(): " + brightness);
        return brightness;
    },
    setBrightness: function (brightness) {
        console.debug("appApi.setBrightness(" + brightness + ")");
    },
    getVolume: function () {
        var volume = 0;
        console.debug("appApi.getVolume(): " + volume);
        return volume;
    },
    setVolume: function (volume) {
        console.debug("appApi.setVolume(" + volume + ")");
    },
};
exports.default = mockedAppApi;
