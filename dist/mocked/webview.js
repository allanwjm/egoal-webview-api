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
    gotoUrl: function (url) {
        window.location.href = url;
        console.debug("webviewApi.gotoUrl(" + url + ")");
    },
};
exports.default = mockedWebviewApi;
