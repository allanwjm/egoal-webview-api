import WebviewInterface from "../interfaces/webview";

const mockedWebviewApi: WebviewInterface = {
  reload() {
    window.location.reload();
    console.debug("webviewApi.refresh()");
  },

  clearHistory() {
    console.error("在浏览器中不支持清除历史记录!");
    console.debug("webviewApi.clearHistory()");
  },

  testConnection(url: string): boolean {
    console.error("在浏览器中不支持连接测试!");
    console.debug("webviewApi.testConnection()");
    return false;
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

export default mockedWebviewApi;
