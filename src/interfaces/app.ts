/**
 * 系统与 APP 相关功能接口。
 */
export default interface AppInterface {

  /**
   * 检查运行环境是否是 Egoal Webview APP。
   * @returns {boolean}
   */
  isWebviewApp(): boolean

  /**
   * 获取设备的 IMEI 码。\
   * 如果无法获取 (如系统版本或权限问题), 返回 `undefined`。\
   * (!) 如果缺少权限, 会提示用户授权, 但是本次调用将会返回 `undefined`。\
   * (!) 该方法返回的识别码可能因网络情况变化而变化。\
   * TODO: 实现对应的 async 版本 (处理异步的授权事件)?
   * @returns {string} IMEI
   */
  getIMEI(): string | undefined;

  /**
   * 获取设备的序列号 (Serial Number)。\
   * 如果无法获取 (如系统版本或权限问题), 返回 `undefined`。\
   * TODO: 实现对应的 async 版本 (处理异步的授权事件)?
   * @returns {string} 序列号
   */
  getSerialNumber(): string | undefined;

  /**
   * 获取当前 Android APP 的版本号, 字符串形式 (例如 `"1.0.0"`)。
   * @returns {string} 版本号
   */
  getAppVersion(): string;

  /**
   * 获取当前 Android APP 的版本号, 数字形式 (例如 `1`)，可用于比较。
   * @returns {number} 版本号
   */
  getAppVersionCode(): number;

  /**
   * 重启 APP，即重新载入整个 Android activity。
   */
  restartApp(): void;

  /**
   * 进入锁屏状态, 阻止用户切换应用。\
   * (!) 锁屏时会弹出 Android 系统的提示框, 需要用户点击同意后才会进入锁屏模式。
   */
  lockScreen(): void;

  /**
   * 解除锁屏状态。
   */
  unlockScreen(): void;

  /**
   * 获取当前屏幕亮度。\
   * TODO: 该功能尚未实现。
   * @returns {number} - 屏幕亮度
   */
  getBrightness(): number;

  /**
   * 设置屏幕亮度。\
   * TODO: 该功能尚未实现。
   * @param {number} brightness - 要设置的屏幕亮度
   */
  setBrightness(brightness: number): void;

  /**
   * 获取当前音量。\
   * TODO: 该功能尚未实现。
   * @returns {number} - 音量
   */
  getVolume(): number;

  /**
   * 设置音量。\
   * TODO: 该功能尚未实现。
   * @param {number} volume - 要设置的音量
   */
  setVolume(volume: number): void;

  /**
   * 设置 APP 顶部状态栏的颜色。(时钟、信号显示区域的背景颜色)\
   * 状态栏的文本会根据颜色自动调整暗色或亮色。
   * @param {string} color - 要设置的颜色字符串, 如 `"#ff0000"`
   */
  setStatusBarColor(color: string): void;
}
