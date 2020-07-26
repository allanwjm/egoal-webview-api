"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockedAppApi() {
    return {
        isWebviewApp: function () {
            console.debug("app.isWebviewApp(): " + false);
            return false;
        },
        getIMEI: function (method) {
            if (method === void 0) { method = 0; }
            var imei = "__MOCKED_IMEI__";
            console.debug("app.getIMEI(" + method + "): " + imei);
            return new Promise(function (resolve) { return resolve(imei); });
        },
        getSerialNumber: function (method) {
            if (method === void 0) { method = 0; }
            var sn = "__MOCKED_SN__";
            console.debug("app.getSerialNumber(" + method + "): " + sn);
            return new Promise(function (resolve) { return resolve(sn); });
        },
        getDeviceMetadata: function () {
            var metadata = null;
            console.debug("app.getDeviceMetadata():", metadata);
            return metadata;
        },
        getAppVersion: function () {
            var version = "__MOCKED_VERSION__";
            console.debug("app.getAppVersion(): " + version);
            return version;
        },
        getAppVersionCode: function () {
            var version = 0;
            console.debug("app.getAppVersionCode(): " + version);
            return version;
        },
        restartApp: function () {
            alert("Mocked: restartApp()");
            console.debug("app.restartApp()");
        },
        quitApp: function () {
            alert("Mocked: quitApp()");
            console.debug("app.quitApp()");
        },
        lockScreen: function () {
            alert("Mocked: lockScreen()");
            console.debug("app.lockScreen()");
        },
        unlockScreen: function () {
            alert("Mocked: unlockScreen()");
            console.debug("app.unlockScreen()");
        },
        getBrightness: function () {
            var brightness = 0;
            console.debug("app.getBrightness(): " + brightness);
            return brightness;
        },
        setBrightness: function (brightness) {
            console.debug("app.setBrightness(" + brightness + ")");
        },
        getVolume: function () {
            var volume = 0;
            console.debug("app.getVolume(): " + volume);
            return volume;
        },
        setVolume: function (volume) {
            console.debug("app.setVolume(" + volume + ")");
        },
        setStatusBarColor: function (color) {
            console.debug("app.setStatusBarColor(" + color + ")");
        }
    };
}
exports.default = mockedAppApi;
