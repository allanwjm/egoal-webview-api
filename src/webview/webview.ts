import WebviewInterface from "../interfaces/webview";

declare const __WEBVIEW_API_WEBVIEW__: WebviewInterface & {};
const api = __WEBVIEW_API_WEBVIEW__;

const webViewApi: WebviewInterface = {
  reload() {
    api.reload();
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
