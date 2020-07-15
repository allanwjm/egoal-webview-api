import {MessageInterface} from "../interfaces/message";

export const mockedMessage: MessageInterface = {

  alert(message?) {
    console.debug("message.alert()");
    window.alert(message);
  },

  confirm(message?: string): boolean {
    console.debug("message.confirm()");
    return window.confirm(message);
  },

  prompt(message?: string, _default?: string): string {
    console.debug("message.prompt()");
    return window.prompt(message, _default);
  },

  toast(message: string) {
    console.debug("message.toast()");
    window.alert("[Toast]\n" + message);
  },

  dismissToast() {
    console.debug("message.dismissToast()");
  },

  beep() {
    console.debug("message.beep()");
    alert("Beep!");
  },
};
