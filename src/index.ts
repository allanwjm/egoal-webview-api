import {AppInterface} from "./interfaces/app";
import {BluetoothInterface} from "./interfaces/bluetooth";
import {BrowserInterface} from "./interfaces/browser";
import {CameraInterface} from "./interfaces/camera";
import {LocationInterface} from "./interfaces/location";
import {MessageInterface} from "./interfaces/message";
import {StorageInterface} from "./interfaces/storage";

const isWebview = window["__WEBVIEW_API__"] !== undefined;

export const app: AppInterface = null;
export const bluetooth: BluetoothInterface = null;
export const browser: BrowserInterface = null;
export const camera: CameraInterface = null;
export const location: LocationInterface = null;
export const message: MessageInterface = null;
export const storage: StorageInterface = null;

export default {
  app,
  bluetooth,
  browser,
  camera,
  location,
  message,
  storage,
};
