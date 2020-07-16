"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webviewApi = exports.storageApi = exports.messageApi = exports.locationApi = exports.cameraApi = exports.bluetoothApi = exports.appApi = void 0;
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
var isApp = window["__WEBVIEW_API_APP__"] !== undefined;
exports.appApi = isApp ? app_2.default : app_1.default;
exports.bluetoothApi = isApp ? bluetooth_2.default : bluetooth_1.default;
exports.cameraApi = isApp ? camera_2.default : camera_1.default;
exports.locationApi = isApp ? location_2.default : location_1.default;
exports.messageApi = isApp ? message_2.default : message_1.default;
exports.storageApi = isApp ? storage_2.default : storage_1.default;
exports.webviewApi = isApp ? webview_2.default : webview_1.default;
exports.default = {
    appApi: exports.appApi,
    bluetoothApi: exports.bluetoothApi,
    cameraApi: exports.cameraApi,
    locationApi: exports.locationApi,
    messageApi: exports.messageApi,
    storageApi: exports.storageApi,
    webviewApi: exports.webviewApi,
};
