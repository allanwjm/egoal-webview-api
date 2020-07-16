import WebviewInterface from "../interfaces/webview";

const mockedWebviewApi: WebviewInterface = {
  reload() {
    console.debug("browser.refresh()");
    window.location.reload();
  },

  clearHistory() {
    console.debug("browser.clearHistory()");
    console.error("浏览器中不支持清除历史记录");
  },

  gotoUrl(url: string) {
    console.debug("browser.gotoUrl()");
    window.location.href = url;
  },

  gotoLandingPage() {
    console.debug("browser.gotoLandingPage()");
    this.gotoUrl("/#/");
  },

  gotoSettingPage() {
    console.debug("browser.gotoSettingPage()");
    this.gotoUrl("/#/setting");
  },

  gotoDemoPage() {
    console.debug("browser.gotoSettingPage()");
    this.gotoUrl("/#/demo");
  },
};

export default mockedWebviewApi;
