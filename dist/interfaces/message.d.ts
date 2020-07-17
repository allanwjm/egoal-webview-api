/**
 * 消息提示相关功能接口。
 */
export default interface MessageInterface {
    /**
     * 用法同 JavaScript alert()。
     * 会调用 APP 内的弹窗而不是浏览器的弹窗。
     * @param {*} message - 要显示的内容
     */
    alert(message?: any): void;
    /**
     * 用法同 JavaScript confirm()。
     * 会调用 APP 内的弹窗而不是浏览器的弹窗。
     * @param {string} [message] - 要显示的内容
     */
    confirm(message?: string): boolean;
    /**
     * 用法同 JavaScript prompt()。
     * 会调用 APP 内的弹窗而不是浏览器的弹窗。
     * @param {string} [message] - 要显示的内容
     * @param {string} [_default] - 默认的返回值
     * @returns {string} 用户输入的内容
     */
    prompt(message?: string, _default?: string): string;
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
