import {StorageInterface} from "../interfaces/storage";

export const mockedStorage: StorageInterface = {
  clear() {
    console.debug("storage.clear()");
    window.localStorage.clear();
  },

  remove(key: string) {
    console.debug("storage.remove()");
    window.localStorage.removeItem(key);
  },

  exists(key: string): boolean {
    console.debug("storage.exists()");
    return window.localStorage.getItem(key) !== null;
  },

  get(key: string, _default?: string): string {
    console.debug("storage.get()");
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return _default;
    } else {
      return value;
    }
  },

  set(key: string, value: string) {
    console.debug("storage.set()");
    window.localStorage.setItem(key, value);
  },
};
