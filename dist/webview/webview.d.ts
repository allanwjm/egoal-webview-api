export default function webViewApi(): {
    clearHistory(): void;
    testConnection(url: string, timeout?: number): boolean;
    gotoUrl(url: string): void;
    gotoUrlAndClearHistory(url: string): void;
};
