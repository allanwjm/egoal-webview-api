"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.message = exports.location = exports.camera = exports.browser = exports.bluetooth = exports.app = void 0;
var isWebview = window["__WEBVIEW_API__"] !== undefined;
exports.app = null;
exports.bluetooth = null;
exports.browser = null;
exports.camera = null;
exports.location = null;
exports.message = null;
exports.storage = null;
exports.default = {
    app: exports.app,
    bluetooth: exports.bluetooth,
    browser: exports.browser,
    camera: exports.camera,
    location: exports.location,
    message: exports.message,
    storage: exports.storage,
};
