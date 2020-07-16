import MessageInterface from "../interfaces/message";

const api = window["__WEBVIEW_API_MESSAGE__"];

const messageApi: MessageInterface = {
  alert: window.alert,
  confirm: window.confirm,
  prompt: window.prompt,

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

export default messageApi;
