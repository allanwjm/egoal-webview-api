import {AppInterface} from "../interfaces/app";

const api = window["__WEBVIEW_API__"];

export const webviewApp: AppInterface = {
  isWebviewApp(): boolean {
    return true;
  },

  getIMEI(): string {
    return api.getIMEI();
  },

  getSerialNumber(): string {
    return api.getSerialNumber();
  },

  getAppVersion(): string {
    return api.getAppVersion();
  },

  restartApp() {
    api.restartApp();
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
    api.setBrightness();
  },

  getVolume(): number {
    return api.getVolume();
  },

  setVolume(volume: number) {
    api.setVolume(volume);
  },
};
