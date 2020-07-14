export interface Message {
    alert(message?: any): any;
    confirm(message?: string): boolean;
    prompt(message?: string, _default?: string): string;
    toast(message: string): any;
    dismissToast(): any;
}
