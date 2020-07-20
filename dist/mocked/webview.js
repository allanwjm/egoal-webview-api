"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedWebviewApi = {
    reload: function () {
        window.location.reload();
        console.debug("webviewApi.refresh()");
    },
    clearHistory: function () {
        console.error("在浏览器中不支持清除历史记录!");
        console.debug("webviewApi.clearHistory()");
    },
    testConnection: function (url) {
        console.error("在浏览器中不支持连接测试!");
        console.debug("webviewApi.testConnection()");
        return false;
    },
    gotoUrl: function (url) {
        window.location.href = url;
        console.debug("webviewApi.gotoUrl(" + url + ")");
    },
    gotoUrlAndClearHistory: function (url) {
        window.location.href = url;
        console.error("在浏览器中不支持清除历史记录!");
        console.debug("webviewApi.gotoUrlAndClearHistory(" + url + ")");
    }
};
exports.default = mockedWebviewApi;
