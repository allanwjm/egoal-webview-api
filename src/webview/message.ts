import MessageInterface from "../interfaces/message";

declare const __WEBVIEW_API_MESSAGE__: MessageInterface;

export default function messageApi(): MessageInterface {
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
