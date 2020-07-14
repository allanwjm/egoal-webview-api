export interface Storage {
    clear(key: string): any;
    clearAll(): any;
    get(key: string, _default?: string): string;
    set(key: string, value: string): any;
}
