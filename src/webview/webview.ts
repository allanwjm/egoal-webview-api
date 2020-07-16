import WebviewInterface from "../interfaces/webview";

const api = window["__WEBVIEW_API_BROWSER__"];

const webViewApi: WebviewInterface = {
  reload() {
    window.location.reload();
  },

  clearHistory() {
    api.clearHistory();
  },

  gotoUrl(url: string) {
    api.gotoUrl(url);
  },

  gotoLandingPage() {
    api.gotoLandingPage();
  },

  gotoSettingPage() {
    api.gotoSettingPage();
  },

  gotoDemoPage() {
    api.gotoDemoPage();
  },
};

export default webViewApi;
