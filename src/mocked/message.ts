import MessageInterface from "../interfaces/message";

const mockedMessageApi: MessageInterface = {
  alert(message?) {
    window.alert(message);
    console.debug(`messageApi.alert(${message})`);
  },

  confirm(message?: string): boolean {
    const result = window.confirm(message);
    console.debug(`messageApi.confirm(${message}): ${result}`);
    return result;
  },

  prompt(message?: string, _default?: string): string {
    const result = window.prompt(message, _default);
    if (_default === undefined) {
      console.debug(`messageApi.prompt(${message}): ${result}`);
    } else {
      console.debug(`messageApi.prompt(${message}, ${_default}): ${result}`);
    }
    return result;
  },

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

export default mockedMessageApi;
