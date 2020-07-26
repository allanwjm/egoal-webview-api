"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockedMessageApi() {
    return {
        toast: function (message) {
            console.log("[Toast]: \"" + message + "\"");
            console.debug("message.toast(" + message + ")");
        },
        dismissToast: function () {
            console.debug("message.dismissToast()");
        },
        beep: function () {
            console.log("[Beep]");
            console.debug("message.beep()");
        },
    };
}
exports.default = mockedMessageApi;
;
