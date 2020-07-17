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
};

export default webViewApi;
