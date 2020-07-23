"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function webViewApi() {
    var api = __WEBVIEW_API_WEBVIEW__;
    return {
        clearHistory: function () {
            api.clearHistory();
        },
        testConnection: function (url, timeout) {
            if (timeout === void 0) { timeout = 15000; }
            return api.testConnection(url, timeout);
        },
        gotoUrl: function (url) {
            api.gotoUrl(url);
        },
        gotoUrlAndClearHistory: function (url) {
            api.gotoUrlAndClearHistory(url);
        }
    };
}
exports.default = webViewApi;
;
