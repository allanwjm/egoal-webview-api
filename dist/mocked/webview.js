"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockedWebviewApi() {
    return {
        clearHistory: function () {
            console.error("在浏览器中不支持清除历史记录!");
            console.debug("webview.clearHistory()");
        },
        testConnectionSync: function (url, timeout) {
            console.error("在浏览器中不支持连接测试!");
            console.debug("webview.testConnectionSync(\"" + url + "\", " + timeout + ")");
            return false;
        },
        testConnection: function (url, timeout) {
            console.error("在浏览器中不支持连接测试!");
            console.debug("webview.testConnection(\"" + url + "\", " + timeout + ")");
            return new Promise(function (resolve) { return resolve(false); });
        },
        gotoUrl: function (url) {
            window.location.href = url;
            console.debug("webview.gotoUrl(" + url + ")");
        },
        gotoUrlAndClearHistory: function (url) {
            window.location.href = url;
            console.error("在浏览器中不支持清除历史记录!");
            console.debug("webview.gotoUrlAndClearHistory(" + url + ")");
        }
    };
}
exports.default = mockedWebviewApi;
;
