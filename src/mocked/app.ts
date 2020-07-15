import {AppInterface} from "../interfaces/app";

export const mockedApp: AppInterface = {
  isWebviewApp(): boolean {
    console.debug("app.isWebviewApp()");
    return false;
  },

  getIMEI(): string {
    console.debug("app.getIMEI()");
    return "__MOCKED_IMEI__";
  },

  getSerialNumber(): string {
    console.debug("app.getSerialNumber()");
    return "__MOCKED_SN__";
  },

  getAppVersion(): string {
    console.debug("app.getAppVersion()");
    return "__MOCKED_VERSION__";
  },

  restartApp() {
    console.debug("app.restartApp()");
    alert("Mocked: 重启 APP");
  },

  lockScreen() {
    console.debug("app.lockScreen()");
    alert("Mocked: 锁屏");
  },

  unlockScreen() {
    console.debug("app.unlockScreen()");
    alert("Mocked: 解锁屏幕");
  },

  getBrightness(): number {
    console.debug("app.getBrightness()");
    return -1;
  },

  setBrightness(brightness: number) {
    console.debug("app.setBrightness()");
  },

  getVolume(): number {
    console.debug("app.getVolume");
    return -1;
  },

  setVolume(volume: number) {
    console.debug("app.setVolume()");
  },
};
