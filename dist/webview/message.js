"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function messageApi() {
    var api = __WEBVIEW_API_MESSAGE__;
    return {
        toast: function (message) {
            api.toast(message);
        },
        dismissToast: function () {
            api.dismissToast();
        },
        beep: function () {
            api.beep();
        },
    };
}
exports.default = messageApi;
;
