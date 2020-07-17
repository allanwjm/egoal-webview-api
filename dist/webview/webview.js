"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = window["__WEBVIEW_API_BROWSER__"];
var webViewApi = {
    reload: function () {
        window.location.reload();
    },
    clearHistory: function () {
        api.clearHistory();
    },
    gotoUrl: function (url) {
        api.gotoUrl(url);
    },
};
exports.default = webViewApi;
