import StorageInterface from "../interfaces/storage";

const api = window["__WEBVIEW_API_STORAGE__"];

const storageApi: StorageInterface = {
  clear() {
    api.clear();
  },

  remove(key: string) {
    api.remove(key);
  },

  exists(key: string): boolean {
    return api.get(key) !== null;
  },

  get(key: string, _default?: string): string {
    const value = api.get(key);
    if (value === null) {
      return _default;
    } else {
      return value;
    }
  },

  set(key: string, value: string) {
    api.set(key, value);
  },
};

export default storageApi;
