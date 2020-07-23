"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webview = exports.storage = exports.message = exports.location = exports.camera = exports.bluetooth = exports.app = exports.isWebviewApp = void 0;
var app_1 = __importDefault(require("./mocked/app"));
var bluetooth_1 = __importDefault(require("./mocked/bluetooth"));
var camera_1 = __importDefault(require("./mocked/camera"));
var location_1 = __importDefault(require("./mocked/location"));
var message_1 = __importDefault(require("./mocked/message"));
var storage_1 = __importDefault(require("./mocked/storage"));
var webview_1 = __importDefault(require("./mocked/webview"));
var app_2 = __importDefault(require("./webview/app"));
var bluetooth_2 = __importDefault(require("./webview/bluetooth"));
var camera_2 = __importDefault(require("./webview/camera"));
var location_2 = __importDefault(require("./webview/location"));
var message_2 = __importDefault(require("./webview/message"));
var storage_2 = __importDefault(require("./webview/storage"));
var webview_2 = __importDefault(require("./webview/webview"));
exports.isWebviewApp = typeof __WEBVIEW_API_APP__ !== "undefined";
exports.app = exports.isWebviewApp ? app_2.default() : app_1.default();
exports.bluetooth = exports.isWebviewApp ? bluetooth_2.default() : bluetooth_1.default();
exports.camera = exports.isWebviewApp ? camera_2.default() : camera_1.default();
exports.location = exports.isWebviewApp ? location_2.default() : location_1.default();
exports.message = exports.isWebviewApp ? message_2.default() : message_1.default();
exports.storage = exports.isWebviewApp ? storage_2.default() : storage_1.default();
exports.webview = exports.isWebviewApp ? webview_2.default() : webview_1.default();
var api = {
    app: exports.app,
    bluetooth: exports.bluetooth,
    camera: exports.camera,
    location: exports.location,
    message: exports.message,
    storage: exports.storage,
    webview: exports.webview,
};
exports.default = api;
