export interface DeviceMetadata {
    /**
     * 手机制作厂商
     */
    brand: string;
    /**
     * 系统默认语言
     */
    lang: string;
    /**
     * 手机型号
     */
    model: string;
    /**
     * Android SDK 版本
     */
    sdk: number;
    /**
     * Android 系统版本
     */
    system: string;
}
/**
 * 系统与 APP 相关功能接口。
 */
export default interface AppInterface {
    /**
     * 检查运行环境是否是 Egoal Webview APP。
     * @returns {boolean}
     */
    isWebviewApp(): boolean;
    /**
     * 获取设备地 IMEI 码，异步版本，等待用户响应授权请求后返回。\
     * 如果无法获取 (如系统版本或权限问题), 返回 `null`。\
     * **(!)** 如果缺少权限, 会提示用户授权，并在用户响应后返回结果。\
     * **(!)** 该方法返回的识别码可能因网络情况变化而变化，且不保证与真实值一致。
     * @param {number} method - 获取方式
     * @returns {Promise<string | null>}
     */
    getIMEI(method?: number): Promise<string | null>;
    /**
     * 获取设备的序列号 (Serial Number)，异步版本，等待用户响应授权请求后返回。\
     * 如果无法获取 (如系统版本或权限问题), 返回 `null`。\
     * **(!)** 如果缺少权限, 会提示用户授权，并在用户响应后返回结果。\
     * **(!)** 该方法返回的序列号不保证与真实值一致。
     * @param {number} method - 获取方式
     * @returns {string} 序列号，或 `null`
     */
    getSerialNumber(method?: number): Promise<string | null>;
    /**
     * 获取设备的其他信息。
     * @returns {DeviceMetadata} 设备信息
     */
    getDeviceMetadata(): DeviceMetadata;
    /**
     * 获取当前 Android APP 的版本号, 字符串形式，例如 `"1.0.0"`。
     * @returns {string} 版本号
     */
    getAppVersion(): string;
    /**
     * 获取当前 Android APP 的版本号, 数字形式，例如 `1`，可用于比较。
     * @returns {number} 版本号
     */
    getAppVersionCode(): number;
    /**
     * 重启 APP，即重新载入整个 Android activity。
     */
    restartApp(): void;
    /**
     * 关闭退出 APP
     */
    quitApp(): void;
    /**
     * 进入锁屏状态, 阻止用户切换应用。\
     * **(!)** 锁屏时会弹出 Android 系统的提示框, 需要用户点击同意后才会进入锁屏模式。
     */
    lockScreen(): void;
    /**
     * 解除锁屏状态。
     */
    unlockScreen(): void;
    /**
     * 获取当前屏幕亮度。\
     * **TODO: 该功能尚未实现。**
     * @returns {number} - 屏幕亮度
     */
    getBrightness(): number;
    /**
     * 设置屏幕亮度。\
     * **TODO: 该功能尚未实现。**
     * @param {number} brightness - 要设置的屏幕亮度
     */
    setBrightness(brightness: number): void;
    /**
     * 获取当前音量。\
     * **TODO: 该功能尚未实现。**
     * @returns {number} - 音量
     */
    getVolume(): number;
    /**
     * 设置音量。\
     * **TODO: 该功能尚未实现。**
     * @param {number} volume - 要设置的音量
     */
    setVolume(volume: number): void;
    /**
     * 设置 APP 顶部状态栏的颜色。(时钟、信号显示区域的背景颜色)\
     * 状态栏的文本会根据颜色自动调整暗色或亮色。\
     * 颜色格式为 `#RRGGBB` 或 `#AARRGGBB`，也接受常见颜色名如 `red`，`blue` 等。\
     * 详见 https://developer.android.com/reference/android/graphics/Color#parseColor(java.lang.String)
     * @param {string} color - 颜色字符串
     */
    setStatusBarColor(color: string): void;
}
