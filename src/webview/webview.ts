import WebviewInterface from "../interfaces/webview";

declare const __WEBVIEW_API_WEBVIEW__: WebviewInterface;

export default function webViewApi() {
  const api = __WEBVIEW_API_WEBVIEW__;

  return {
    clearHistory() {
      api.clearHistory();
    },

    testConnection(url: string, timeout: number = 15000): boolean {
      return api.testConnection(url, timeout);
    },

    gotoUrl(url: string) {
      api.gotoUrl(url);
    },

    gotoUrlAndClearHistory(url: string) {
      api.gotoUrlAndClearHistory(url);
    }
  };
};
