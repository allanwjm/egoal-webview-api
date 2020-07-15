"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedBrowser = void 0;
exports.mockedBrowser = {
    reload: function () {
        console.debug("browser.refresh()");
        window.location.reload();
    },
    clearHistory: function () {
        console.debug("browser.clearHistory()");
        console.error("浏览器中不支持清除历史记录");
    },
    gotoUrl: function (url) {
        console.debug("browser.gotoUrl");
        window.location.href = url;
    },
};
