export interface BrowserInterface {
    /**
     * 刷新当前页面
     */
    reload(): any;
    /**
     * 清除浏览器历史记录 (使返回键不再能返回上一页面)
     */
    clearHistory(): any;
    /**
     * 打开页面
     * @param {string} url - 要打开的页面 URL
     */
    gotoUrl(url: string): any;
}
