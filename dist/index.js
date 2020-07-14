"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var app_1 = require("./dummy/app");
var isWebviewApp = window["__WEBVIEW_API__"] !== undefined;
exports.app = isWebviewApp ? null : app_1.default;
