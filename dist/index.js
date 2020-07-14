"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var app_1 = __importDefault(require("./dummy/app"));
var isWebviewApp = window["__WEBVIEW_API__"] !== undefined;
exports.app = isWebviewApp ? null : app_1.default;
