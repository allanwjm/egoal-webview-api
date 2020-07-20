import AppInterface from "../interfaces/app";

const mockedAppApi: AppInterface = {
  isWebviewApp(): boolean {
    console.debug(`appApi.isWebviewApp(): ${false}`);
    return false;
  },

  getIMEI(): string {
    const imei = "__MOCKED_IMEI__";
    console.debug(`appApi.getIMEI(): ${imei}`);
    return imei;
  },

  getSerialNumber(): string {
    const sn = "__MOCKED_SN__";
    console.debug(`appApi.getSerialNumber(): ${sn}`);
    return sn;
  },

  getAppVersion(): string {
    const version = "__MOCKED_VERSION__";
    console.debug(`appApi.getAppVersion(): ${version}`);
    return version;
  },

  getAppVersionCode(): number {
    const version = 0;
    console.debug(`appApi.getAppVersionCode(): ${version}`);
    return version;
  },

  restartApp() {
    alert("Mocked: restartApp()");
    console.debug("appApi.restartApp()");
  },

  lockScreen() {
    alert("Mocked: lockScreen()");
    console.debug("appApi.lockScreen()");
  },

  unlockScreen() {
    alert("Mocked: unlockScreen()");
    console.debug("appApi.unlockScreen()");
  },

  getBrightness(): number {
    const brightness = 0;
    console.debug(`appApi.getBrightness(): ${brightness}`);
    return brightness;
  },

  setBrightness(brightness: number) {
    console.debug(`appApi.setBrightness(${brightness})`);
  },

  getVolume(): number {
    const volume = 0;
    console.debug(`appApi.getVolume(): ${volume}`);
    return volume;
  },

  setVolume(volume: number) {
    console.debug(`appApi.setVolume(${volume})`);
  },

  setStatusBarColor(color: string) {
    console.debug(`appApi.setStatusBarColor(${color})`);
  }
};

export default mockedAppApi;
