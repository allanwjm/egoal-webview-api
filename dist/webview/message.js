"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = window["__WEBVIEW_API_MESSAGE__"];
var messageApi = {
    alert: window.alert,
    confirm: window.confirm,
    prompt: window.prompt,
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
exports.default = messageApi;
