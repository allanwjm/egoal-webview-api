import AppInterface, {DeviceMetadata} from "../interfaces/app";

export default function mockedAppApi(): AppInterface {
  return {
    isWebviewApp(): boolean {
      console.debug(`app.isWebviewApp(): ${false}`);
      return false;
    },

    getIMEI(method: number = 0): Promise<string | null> {
      const imei = "__MOCKED_IMEI__";
      console.debug(`app.getIMEI(${method}): ${imei}`);
      return new Promise(resolve => resolve(imei));
    },

    getSerialNumber(method: number = 0): Promise<string | null> {
      const sn = "__MOCKED_SN__";
      console.debug(`app.getSerialNumber(${method}): ${sn}`);
      return new Promise(resolve => resolve(sn));
    },

    getDeviceMetadata(): DeviceMetadata {
      const metadata = null;
      console.debug("app.getDeviceMetadata():", metadata);
      return metadata;
    },

    getAppVersion(): string {
      const version = "__MOCKED_VERSION__";
      console.debug(`app.getAppVersion(): ${version}`);
      return version;
    },

    getAppVersionCode(): number {
      const version = 0;
      console.debug(`app.getAppVersionCode(): ${version}`);
      return version;
    },

    restartApp() {
      alert("Mocked: restartApp()");
      console.debug("app.restartApp()");
    },

    quitApp() {
      alert("Mocked: quitApp()");
      console.debug("app.quitApp()");
    },

    lockScreen() {
      alert("Mocked: lockScreen()");
      console.debug("app.lockScreen()");
    },

    unlockScreen() {
      alert("Mocked: unlockScreen()");
      console.debug("app.unlockScreen()");
    },

    getBrightness(): number {
      const brightness = 0;
      console.debug(`app.getBrightness(): ${brightness}`);
      return brightness;
    },

    setBrightness(brightness: number) {
      console.debug(`app.setBrightness(${brightness})`);
    },

    getVolume(): number {
      const volume = 0;
      console.debug(`app.getVolume(): ${volume}`);
      return volume;
    },

    setVolume(volume: number) {
      console.debug(`app.setVolume(${volume})`);
    },

    setStatusBarColor(color: string) {
      console.debug(`app.setStatusBarColor(${color})`);
    }
  };
}
