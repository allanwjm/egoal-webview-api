import {App} from "../interfaces/app";

function notSupported(target: string) {
  console.error(`在浏览器中不支持：${target}`);
}

const dummyApp: App = {
  clearHistory() {
    notSupported("clearHistory()");
  },

  getIMEI(): string {
    return "__IMEI__";
  },

  getSN(): string {
    return "__SERIAL_NUMBER__";
  },

  getAppVersion(): string {
    return "__BROWSER__";
  },

  gotoUrl(url: string) {
    window.location.href = url;
  },

  lockScreen() {
    alert("已锁定屏幕");
  },

  unlockScreen() {
    alert("已解锁屏幕");
  },

  refresh() {
    window.location.reload();
  },

  restartApp() {
    window.location.reload();
  },
};

export default dummyApp;
