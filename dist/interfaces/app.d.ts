export default interface AppInterface {
    /**
     * 检查运行环境是否是 Egoal Webview APP。
     * @returns {boolean}
     */
    isWebviewApp(): boolean;
    /**
     * 获取设备的 IMEI 码。如果获取失败, 将会返回 null。
     * @returns {string} IMEI
     */
    getIMEI(): string;
    /**
     * 获取设备的序列号 (Serial Number)。如果获取失败, 将会返回 null。
     * @returns {string} 序列号
     */
    getSerialNumber(): string;
    /**
     * 获取 APP 的版本号 (例如 "1.0.0")
     * @returns {string} 版本号
     */
    getAppVersion(): string;
    /**
     * 获取 APP 的版本号 (数字形式)
     * @returns {number} 版本号
     */
    getAppVersionCode(): number;
    /**
     * 重启 APP (重新载入 Android activity)
     */
    restartApp(): any;
    /**
     * 进入锁屏状态, 阻止用户切出 APP
     */
    lockScreen(): any;
    /**
     * 解除锁屏状态
     */
    unlockScreen(): any;
    /**
     * 获取当前屏幕亮度
     * @returns {number} - 屏幕亮度 (TODO: 取值范围)
     */
    getBrightness(): number;
    /**
     * 设置屏幕亮度
     * @param {number} brightness - 要设置的屏幕亮度 (TODO: 取值范围)
     */
    setBrightness(brightness: number): any;
    /**
     * 获取当前音量
     * @returns {number} - 音量 (TODO: 取值范围)
     */
    getVolume(): number;
    /**
     * 设置音量
     * @param {number} volume - 要设置的音量 (TODO: 取值范围)
     */
    setVolume(volume: number): any;
}
