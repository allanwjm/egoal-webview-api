import MessageInterface from "../interfaces/message";

export default function mockedMessageApi(): MessageInterface {
  return {
    toast(message: string) {
      console.log(`[Toast]: "${message}"`);
      console.debug(`message.toast(${message})`);
    },

    dismissToast() {
      console.debug("message.dismissToast()");
    },

    beep() {
      console.log("[Beep]");
      console.debug("message.beep()");
    },
  };
};
