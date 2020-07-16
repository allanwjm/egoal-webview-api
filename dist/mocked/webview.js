"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedWebviewApi = {
    reload: function () {
        console.debug("browser.refresh()");
        window.location.reload();
    },
    clearHistory: function () {
        console.debug("browser.clearHistory()");
        console.error("浏览器中不支持清除历史记录");
    },
    gotoUrl: function (url) {
        console.debug("browser.gotoUrl()");
        window.location.href = url;
    },
    gotoLandingPage: function () {
        console.debug("browser.gotoLandingPage()");
        this.gotoUrl("/#/");
    },
    gotoSettingPage: function () {
        console.debug("browser.gotoSettingPage()");
        this.gotoUrl("/#/setting");
    },
    gotoDemoPage: function () {
        console.debug("browser.gotoSettingPage()");
        this.gotoUrl("/#/demo");
    },
};
exports.default = mockedWebviewApi;
