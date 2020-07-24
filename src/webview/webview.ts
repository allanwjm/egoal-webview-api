import WebviewInterface from "../interfaces/webview";

const testConnectionResolves: {[uuid: string]: Function} = {};

export default function webViewApi(): WebviewInterface {
  // @ts-ignore
  const api = __WEBVIEW_API_WEBVIEW__;

  api.__CALLBACK_TEST_CONNECTION__ = function(uuid: string, result: boolean) {
    const resolve = testConnectionResolves[uuid];
    if (resolve) {
      resolve(result);
    }
  };

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
        testConnectionResolves[uuid] = resolve;
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
