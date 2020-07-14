export interface Storage {
  clear(key: string);
  clearAll();
  get(key: string, _default?: string): string;
  set(key: string, value: string);
}
