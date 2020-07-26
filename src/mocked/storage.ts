import StorageInterface from "../interfaces/storage";

export default function mockedStorageApi(): StorageInterface {
  return {
    clear() {
      window.localStorage.clear();
      console.debug("storage.clear()");
    },

    remove(key: string) {
      window.localStorage.removeItem(key);
      console.debug(`storage.remove(${key})`);
    },

    exists(key: string): boolean {
      const result = window.localStorage.getItem(key) !== null;
      console.debug(`storage.exists(${key}): ${result}`);
      return result;
    },

    get(key: string, _default?: string): string {
      let value = window.localStorage.getItem(key);
      if (value === null) {
        value = _default;
      }
      if (_default === undefined) {
        console.debug(`storage.get(${key}): ${value}`);
      } else {
        console.debug(`storage.get(${key}, ${_default}): ${value}`);
      }
      return value;
    },

    set(key: string, value: string) {
      window.localStorage.setItem(key, value);
      console.debug(`storage.set(${key}, ${value})`);
    },
  };
};
