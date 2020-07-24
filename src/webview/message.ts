import MessageInterface from "../interfaces/message";

export default function messageApi(): MessageInterface {
  // @ts-ignore
  const api = __WEBVIEW_API_MESSAGE__;

  return {
    toast(message: string) {
      api.toast(message);
    },

    dismissToast() {
      api.dismissToast();
    },

    beep() {
      api.beep();
    },
  };
};
