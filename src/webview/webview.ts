import WebviewInterface from "../interfaces/webview";
import {pushResolve, simpleCallback} from "./callbacks";

export default function webViewApi(): WebviewInterface {
  // @ts-ignore
  const api = __WEBVIEW_API_WEBVIEW__;

  api.__CALLBACK_TEST_CONNECTION__ = simpleCallback;

  return {
    clearHistory() {
      api.clearHistory();
    },

    testConnectionSync(url: string, timeout: number = 15000): boolean {
      return api.testConnectionSync(url, timeout);
    },

    testConnection(url: string, timeout: number = 15000): Promise<boolean> {
      return new Promise(resolve => {
        const uuid = api.testConnection(url, timeout);
        pushResolve(uuid, resolve);
      });
    },

    gotoUrl(url: string) {
      api.gotoUrl(url);
    },

    gotoUrlAndClearHistory(url: string) {
      api.gotoUrlAndClearHistory(url);
    }
  };
};
