"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockedMessageApi() {
    return {
        toast: function (message) {
            console.log("[Toast]: \"" + message + "\"");
            console.debug("messageApi.toast(" + message + ")");
        },
        dismissToast: function () {
            console.debug("messageApi.dismissToast()");
        },
        beep: function () {
            console.log("[Beep]");
            console.debug("messageApi.beep()");
        },
    };
}
exports.default = mockedMessageApi;
;
