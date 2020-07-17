"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockedMessageApi = {
    alert: function (message) {
        window.alert(message);
        console.debug("messageApi.alert(" + message + ")");
    },
    confirm: function (message) {
        var result = window.confirm(message);
        console.debug("messageApi.confirm(" + message + "): " + result);
        return result;
    },
    prompt: function (message, _default) {
        var result = window.prompt(message, _default);
        if (_default === undefined) {
            console.debug("messageApi.prompt(" + message + "): " + result);
        }
        else {
            console.debug("messageApi.prompt(" + message + ", " + _default + "): " + result);
        }
        return result;
    },
    toast: function (message) {
        window.alert("[Toast]\n" + message);
        console.debug("messageApi.toast(" + message + ")");
    },
    dismissToast: function () {
        console.debug("messageApi.dismissToast()");
    },
    beep: function () {
        alert("*Beep!");
        console.debug("messageApi.beep()");
    },
};
exports.default = mockedMessageApi;
