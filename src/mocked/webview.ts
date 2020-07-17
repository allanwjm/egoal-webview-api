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

  gotoUrl(url: string) {
    window.location.href = url;
    console.debug(`webviewApi.gotoUrl(${url})`);
  },
};

export default mockedWebviewApi;
