export default interface WebviewInterface {
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
    /**
     * 跳转至起始页 (会跳转至设置的服务器地址，或在未设置的时候跳转至设置页面)
     * (在 Web APP 开发中应该用不到, 主要用于 Android APP 内部)
     */
    gotoLandingPage(): any;
    /**
     * 跳转至设置页
     * (在 Web APP 开发中应该用不到, 主要用于 Android APP 内部)
     */
    gotoSettingPage(): any;
    /**
     * 跳转至功能演示页
     * (在 Web APP 开发中应该用不到, 主要用于 Android APP 内部)
     */
    gotoDemoPage(): any;
}
