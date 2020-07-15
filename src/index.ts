import {AppInterface} from "./interfaces/app";
import {BluetoothInterface} from "./interfaces/bluetooth";
import {BrowserInterface} from "./interfaces/browser";
import {CameraInterface} from "./interfaces/camera";
import {LocationInterface} from "./interfaces/location";
import {MessageInterface} from "./interfaces/message";
import {StorageInterface} from "./interfaces/storage";
import {mockedApp} from "./mocked/app";
import {mockedBluetooth} from "./mocked/bluetooth";
import {mockedBrowser} from "./mocked/browser";
import {mockedCamera} from "./mocked/camera";
import {mockedLocation} from "./mocked/location";
import {mockedMessage} from "./mocked/message";
import {mockedStorage} from "./mocked/storage";
import {webviewApp} from "./webview/app";
import {webviewBluetooth} from "./webview/bluetooth";
import {webviewBrowser} from "./webview/browser";
import {webviewCamera} from "./webview/camera";
import {webviewLocation} from "./webview/location";
import {webviewMessage} from "./webview/message";
import {webviewStorage} from "./webview/storage";

const isWebview = window["__WEBVIEW_API__"] !== undefined;

export const app: AppInterface = isWebview ? webviewApp : mockedApp;
export const bluetooth: BluetoothInterface = isWebview ? webviewBluetooth : mockedBluetooth;
export const browser: BrowserInterface = isWebview ? webviewBrowser : mockedBrowser;
export const camera: CameraInterface = isWebview ? webviewCamera : mockedCamera;
export const location: LocationInterface = isWebview ? webviewLocation : mockedLocation;
export const message: MessageInterface = isWebview ? webviewMessage : mockedMessage;
export const storage: StorageInterface = isWebview ? webviewStorage : mockedStorage;

export default {
  app,
  bluetooth,
  browser,
  camera,
  location,
  message,
  storage,
};
