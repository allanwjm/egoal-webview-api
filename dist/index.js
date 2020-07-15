"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.message = exports.location = exports.camera = exports.browser = exports.bluetooth = exports.app = void 0;
var app_1 = require("./mocked/app");
var bluetooth_1 = require("./mocked/bluetooth");
var browser_1 = require("./mocked/browser");
var camera_1 = require("./mocked/camera");
var location_1 = require("./mocked/location");
var message_1 = require("./mocked/message");
var storage_1 = require("./mocked/storage");
var app_2 = require("./webview/app");
var bluetooth_2 = require("./webview/bluetooth");
var browser_2 = require("./webview/browser");
var camera_2 = require("./webview/camera");
var location_2 = require("./webview/location");
var message_2 = require("./webview/message");
var storage_2 = require("./webview/storage");
var isWebview = window["__WEBVIEW_API__"] !== undefined;
exports.app = isWebview ? app_2.webviewApp : app_1.mockedApp;
exports.bluetooth = isWebview ? bluetooth_2.webviewBluetooth : bluetooth_1.mockedBluetooth;
exports.browser = isWebview ? browser_2.webviewBrowser : browser_1.mockedBrowser;
exports.camera = isWebview ? camera_2.webviewCamera : camera_1.mockedCamera;
exports.location = isWebview ? location_2.webviewLocation : location_1.mockedLocation;
exports.message = isWebview ? message_2.webviewMessage : message_1.mockedMessage;
exports.storage = isWebview ? storage_2.webviewStorage : storage_1.mockedStorage;
exports.default = {
    app: exports.app,
    bluetooth: exports.bluetooth,
    browser: exports.browser,
    camera: exports.camera,
    location: exports.location,
    message: exports.message,
    storage: exports.storage,
};
