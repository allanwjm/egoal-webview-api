import WebviewInterface from "../interfaces/webview";

export default function mockedWebviewApi(): WebviewInterface {
  return {
    clearHistory() {
      console.error("在浏览器中不支持清除历史记录!");
      console.debug("webviewApi.clearHistory()");
    },

    testConnectionSync(url: string, timeout: number): boolean {
      console.error("在浏览器中不支持连接测试!");
      console.debug(`webviewApi.testConnectionSync("${url}", ${timeout})`);
      return false;
    },

    testConnection(url: string, timeout?: number): Promise<boolean> {
      console.error("在浏览器中不支持连接测试!");
      console.debug(`webviewApi.testConnection("${url}", ${timeout})`);
      return new Promise(resolve => resolve(false));
    },

    gotoUrl(url: string) {
      window.location.href = url;
      console.debug(`webviewApi.gotoUrl(${url})`);
    },

    gotoUrlAndClearHistory(url: string) {
      window.location.href = url;
      console.error("在浏览器中不支持清除历史记录!");
      console.debug(`webviewApi.gotoUrlAndClearHistory(${url})`);
    }
  };
};
