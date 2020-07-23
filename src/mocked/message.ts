import MessageInterface from "../interfaces/message";

export default function mockedMessageApi(): MessageInterface {
  return {
    toast(message: string) {
      console.log(`[Toast]: "${message}"`);
      console.debug(`messageApi.toast(${message})`);
    },

    dismissToast() {
      console.debug("messageApi.dismissToast()");
    },

    beep() {
      console.log("[Beep]");
      console.debug("messageApi.beep()");
    },
  };
};
