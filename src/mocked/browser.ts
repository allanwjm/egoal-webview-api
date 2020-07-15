import {BrowserInterface} from "../interfaces/browser";

export const mockedBrowser: BrowserInterface = {
  reload() {
    console.debug("browser.refresh()");
    window.location.reload();
  },

  clearHistory() {
    console.debug("browser.clearHistory()");
    console.error("浏览器中不支持清除历史记录");
  },

  gotoUrl(url: string) {
    console.debug("browser.gotoUrl");
    window.location.href = url;
  },
};
