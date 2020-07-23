import StorageInterface from "../interfaces/storage";

declare const __WEBVIEW_API_STORAGE__: StorageInterface;

export default function storageApi(): StorageInterface {
  const api = __WEBVIEW_API_STORAGE__;

  return {
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
      if (value === undefined || value === null) {
        return _default;
      } else {
        return value;
      }
    },

    set(key: string, value: string) {
      api.set(key, value);
    },
  };
};
