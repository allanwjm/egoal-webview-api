import EgoalWebviewApi from "./api";
import AppInterface from "./interfaces/app";
import BluetoothInterface from "./interfaces/bluetooth";
import CameraInterface from "./interfaces/camera";
import LocationInterface from "./interfaces/location";
import MessageInterface from "./interfaces/message";
import StorageInterface from "./interfaces/storage";
import WebviewInterface from "./interfaces/webview";
import mockedApp from "./mocked/app";
import mockedBluetooth from "./mocked/bluetooth";
import mockedCamera from "./mocked/camera";
import mockedLocation from "./mocked/location";
import mockedMessage from "./mocked/message";
import mockedStorage from "./mocked/storage";
import mockedWebview from "./mocked/webview";
import webviewApp from "./webview/app";
import webViewBluetooth from "./webview/bluetooth";
import webviewCamera from "./webview/camera";
import webviewLocation from "./webview/location";
import webviewMessage from "./webview/message";
import webviewStorage from "./webview/storage";
import webviewWebview from "./webview/webview";

declare const __WEBVIEW_API_APP__;
export const isWebviewApp = typeof __WEBVIEW_API_APP__ !== "undefined";

export const app: AppInterface = isWebviewApp ? webviewApp : mockedApp;
export const bluetooth: BluetoothInterface = isWebviewApp ? webViewBluetooth : mockedBluetooth;
export const camera: CameraInterface = isWebviewApp ? webviewCamera : mockedCamera;
export const location: LocationInterface = isWebviewApp ? webviewLocation : mockedLocation;
export const message: MessageInterface = isWebviewApp ? webviewMessage : mockedMessage;
export const storage: StorageInterface = isWebviewApp ? webviewStorage : mockedStorage;
export const webview: WebviewInterface = isWebviewApp ? webviewWebview : mockedWebview;

const api: EgoalWebviewApi = {
  app,
  bluetooth,
  camera,
  location,
  message,
  storage,
  webview,
};

export default api;
