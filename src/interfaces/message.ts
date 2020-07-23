/**
 * 消息提示相关功能接口。
 */
export default interface MessageInterface {
  /**
   * 显示底部弹出消息 (toast), 该消息同时只能显示一条。
   * @param {string} message - 要显示的内容
   */
  toast(message: string): void;

  /**
   * 收起当前显示的 toast。
   */
  dismissToast(): void;

  /**
   * 发出蜂鸣声。
   */
  beep(): void;
}
