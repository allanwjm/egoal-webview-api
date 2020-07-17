export default interface WebviewInterface {
  /**
   * 刷新当前页面。效果等同 `window.location.reload()`
   */
  reload(): void;

  /**
   * 清除浏览器历史记录 (使返回键不再能返回上一页面)
   * (!) 该方法只在 Android APP 中有效。
   */
  clearHistory(): void;

  /**
   * 打开一个页面。效果等同 `window.location.href = url`
   * @param {string} url - 要打开的页面 URL
   */
  gotoUrl(url: string): void;
}
