"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testConnectionResolves = {};
function webViewApi() {
    // @ts-ignore
    var api = __WEBVIEW_API_WEBVIEW__;
    api.__CALLBACK_TEST_CONNECTION__ = function (uuid, result) {
        var resolve = testConnectionResolves[uuid];
        if (resolve) {
            resolve(result);
        }
    };
    return {
        clearHistory: function () {
            api.clearHistory();
        },
        testConnectionSync: function (url, timeout) {
            if (timeout === void 0) { timeout = 15000; }
            return api.testConnectionSync(url, timeout);
        },
        testConnection: function (url, timeout) {
            if (timeout === void 0) { timeout = 15000; }
            return new Promise(function (resolve) {
                var uuid = api.testConnection(url, timeout);
                testConnectionResolves[uuid] = resolve;
            });
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
