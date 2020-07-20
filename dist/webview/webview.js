"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = __WEBVIEW_API_WEBVIEW__;
var webViewApi = {
    reload: function () {
        api.reload();
    },
    clearHistory: function () {
        api.clearHistory();
    },
    testConnection: function (url) {
        return api.testConnection(url);
    },
    gotoUrl: function (url) {
        api.gotoUrl(url);
    },
    gotoUrlAndClearHistory: function (url) {
        api.gotoUrlAndClearHistory(url);
    }
};
exports.default = webViewApi;
