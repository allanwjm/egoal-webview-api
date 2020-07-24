/**
 * Webview (浏览器组件) 相关功能。
 */
export default interface WebviewInterface {
  /**
   * 清除浏览器历史记录 (使返回键不再能返回上一页面)。\
   * (!) 该方法只在 Android APP 中有效。
   */
  clearHistory(): void;

  /**
   * 测试一个地址是否可以正常连接 (是否可以正常响应 HTTP GET 请求)。\
   * (!) 此方法只在 Android APP 中有效。在浏览器中会直接返回 `false`。\
   * (!) 此方法是同步的，会导致当前线程阻塞。
   * @param {string} url - 要测试的页面 URL
   * @param {number} timeout - 测试超时 (ms), 默认15秒
   * @returns {boolean}
   */
  testConnectionSync(url: string, timeout?: number): boolean;

  /**
   * 测试一个地址是否可以正常连接 (是否可以正常响应 HTTP GET 请求)。\
   * (!) 此方法只在 Android APP 中有效。在浏览器中会直接返回 `false`。
   * @param {string} url - 要测试的页面 URL
   * @param {number} timeout - 测试超时 (ms), 默认15秒
   * @returns {Promise<boolean>}
   */
  testConnection(url: string, timeout?: number): Promise<boolean>;

  /**
   * 打开一个页面。效果等同 `window.location.href = url`，但是是在 APP 中处理的。
   * @param {string} url - 要打开的页面 URL
   */
  gotoUrl(url: string): void;

  /**
   * 打开一个页面。在跳转后会同时删除浏览器内的历史记录，使返回键不再能返回上一页面。
   * @param {string} url - 要打开的页面 URL
   */
  gotoUrlAndClearHistory(url: string): void;
}
