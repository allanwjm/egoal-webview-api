import AppInterface, {DeviceMetadata} from "../interfaces/app";
import {pushResolve, simpleCallback} from "./callbacks";

export default function appApi(): AppInterface {
  // @ts-ignore
  const api = __WEBVIEW_API_APP__;

  api.__CALLBACK_GET_IMEI__ = simpleCallback;
  api.__CALLBACK_GET_SN__ = simpleCallback;

  return {
    isWebviewApp(): boolean {
      return true;
    },

    getIMEI(method: number = 0): Promise<string | null> {
      return new Promise(resolve => {
        const uuid = api.getIMEI(method);
        pushResolve(uuid, resolve);
      });
    },

    getSerialNumber(method: number = 0): Promise<string | null> {
      return new Promise(resolve => {
        const uuid = api.getSerialNumber(method);
        pushResolve(uuid, resolve);
      });
    },

    getDeviceMetadata(): DeviceMetadata {
      const metadataJson = api.getDeviceMetadata();
      return JSON.parse(metadataJson);
    },

    getAppVersion(): string {
      return api.getAppVersion();
    },

    getAppVersionCode(): number {
      return api.getAppVersionCode();
    },

    restartApp() {
      api.restartApp();
    },

    quitApp() {
      api.quitApp();
    },

    lockScreen() {
      api.lockScreen();
    },

    unlockScreen() {
      api.unlockScreen();
    },

    getBrightness() {
      return api.getBrightness();
    },

    setBrightness(brightness: number) {
      api.setBrightness(brightness);
    },

    getVolume(): number {
      return api.getVolume();
    },

    setVolume(volume: number) {
      api.setVolume(volume);
    },

    setStatusBarColor(color: string) {
      api.setStatusBarColor(color);
    },
  };
};
