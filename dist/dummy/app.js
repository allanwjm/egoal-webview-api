"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notSupported(target) {
    console.error("\u5728\u6D4F\u89C8\u5668\u4E2D\u4E0D\u652F\u6301\uFF1A" + target);
}
var dummyApp = {
    clearHistory: function () {
        notSupported("clearHistory()");
    },
    getIMEI: function (index) {
        if (index === undefined) {
            return "DUMMY_IMEI";
        }
        else {
            return "DUMMY_IMEI_" + index;
        }
    },
    getSN: function () {
        return "DUMMY_SERIAL_NUMBER";
    },
    getVersion: function () {
        return "DUMMY_VERSION";
    },
    gotoUrl: function (url) {
        window.location.href = url;
    },
    lockScreen: function () {
        alert("已锁定屏幕");
    },
    unlockScreen: function () {
        alert("已解锁屏幕");
    },
    refresh: function () {
        window.location.reload();
    },
    restartApp: function () {
        window.location.reload();
    },
};
exports.default = dummyApp;
