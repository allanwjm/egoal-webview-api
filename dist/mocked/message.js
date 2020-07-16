"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedMessageApi = {
    alert: function (message) {
        console.debug("message.alert()");
        window.alert(message);
    },
    confirm: function (message) {
        console.debug("message.confirm()");
        return window.confirm(message);
    },
    prompt: function (message, _default) {
        console.debug("message.prompt()");
        return window.prompt(message, _default);
    },
    toast: function (message) {
        console.debug("message.toast()");
        window.alert("[Toast]\n" + message);
    },
    dismissToast: function () {
        console.debug("message.dismissToast()");
    },
    beep: function () {
        console.debug("message.beep()");
        alert("Beep!");
    },
};
exports.default = mockedMessageApi;
