import EgoalWebviewApi from "./egoal-webview-api";
import AppInterface from "./interfaces/app";
import BluetoothInterface from "./interfaces/bluetooth";
import CameraInterface from "./interfaces/camera";
import LocationInterface from "./interfaces/location";
import MessageInterface from "./interfaces/message";
import StorageInterface from "./interfaces/storage";
import BrowserInterface from "./interfaces/webview";
import mockedApp from "./mocked/app";
import mockedBluetooth from "./mocked/bluetooth";
import mockedCamera from "./mocked/camera";
import mockedLocation from "./mocked/location";
import mockedMessage from "./mocked/message";
import mockedStorage from "./mocked/storage";
import mockedWebview from "./mocked/webview";
import app from "./webview/app";
import bluetooth from "./webview/bluetooth";
import camera from "./webview/camera";
import location from "./webview/location";
import message from "./webview/message";
import storage from "./webview/storage";
import webview from "./webview/webview";

const isApp = window["__WEBVIEW_API_APP__"] !== undefined;

export const appApi: AppInterface = isApp ? app : mockedApp;
export const bluetoothApi: BluetoothInterface = isApp ? bluetooth : mockedBluetooth;
export const cameraApi: CameraInterface = isApp ? camera : mockedCamera;
export const locationApi: LocationInterface = isApp ? location : mockedLocation;
export const messageApi: MessageInterface = isApp ? message : mockedMessage;
export const storageApi: StorageInterface = isApp ? storage : mockedStorage;
export const webviewApi: BrowserInterface = isApp ? webview : mockedWebview;

const api: EgoalWebviewApi = {
  appApi,
  bluetoothApi,
  cameraApi,
  locationApi,
  messageApi,
  storageApi,
  webviewApi,
};

export default api;
