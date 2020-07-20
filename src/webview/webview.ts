import WebviewInterface from "../interfaces/webview";

const api = window["__WEBVIEW_API_WEBVIEW__"];

const webViewApi: WebviewInterface = {
  reload() {
    window.location.reload();
  },

  clearHistory() {
    api.clearHistory();
  },

  testConnection(url: string): boolean {
    return api.testConnection(url);
  },

  gotoUrl(url: string) {
    api.gotoUrl(url);
  },

  gotoUrlAndClearHistory(url: string) {
    api.gotoUrlAndClearHistory(url);
  }
};

export default webViewApi;
