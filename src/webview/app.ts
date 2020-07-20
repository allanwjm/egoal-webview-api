import AppInterface from "../interfaces/app";

const api = window["__WEBVIEW_API_APP__"];

const appApi: AppInterface = {
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

  getAppVersionCode(): number {
    return api.getAppVersionCode();
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

export default appApi;
