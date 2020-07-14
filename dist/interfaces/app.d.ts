export interface App {
    /**
     * 获取设备的IMEI码
     * @returns {string} IMEI
     */
    getIMEI(): string;
    /**
     * 获取设备的序列号（Serial Number）
     * @returns {string} SN
     */
    getSN(): string;
    /**
     * 获取Webview app的版本号
     * @returns {string} 版本号
     */
    getAppVersion(): string;
    /**
     * 重启整个app（Android activity)
     */
    restartApp(): any;
    /**
     * 刷新当前页面
     */
    refresh(): any;
    /**
     * 开启锁屏，阻止用户切换app
     */
    lockScreen(): any;
    /**
     * 解除锁屏
     */
    unlockScreen(): any;
    /**
     * 清除浏览器历史记录（使返回键不再能返回上一页面）
     */
    clearHistory(): any;
    /**
     * 打开页面
     * @param {string} url - 要打开的页面URL
     */
    gotoUrl(url: string): any;
}
