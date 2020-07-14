export interface Message {
  alert(message?);
  confirm(message?: string): boolean;
  prompt(message?: string, _default?: string): string;
  toast(message: string);
  dismissToast();
}
