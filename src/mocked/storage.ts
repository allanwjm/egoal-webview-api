import StorageInterface from "../interfaces/storage";

export default function mockedStorageApi(): StorageInterface {
  return {
    clear() {
      window.localStorage.clear();
      console.debug("storageApi.clear()");
    },

    remove(key: string) {
      window.localStorage.removeItem(key);
      console.debug(`storageApi.remove(${key})`);
    },

    exists(key: string): boolean {
      const result = window.localStorage.getItem(key) !== null;
      console.debug(`storageApi.exists(${key}): ${result}`);
      return result;
    },

    get(key: string, _default?: string): string {
      let value = window.localStorage.getItem(key);
      if (value === null) {
        value = _default;
      }
      if (_default === undefined) {
        console.debug(`storageApi.get(${key}): ${value}`);
      } else {
        console.debug(`storageApi.get(${key}, ${_default}): ${value}`);
      }
      return value;
    },

    set(key: string, value: string) {
      window.localStorage.setItem(key, value);
      console.debug(`storageApi.set(${key}, ${value})`);
    },
  };
};
