export interface App {
    getIMEI(index?: number): string;
    getSN(): string;
    getVersion(): string;
    restartApp(): any;
    refresh(): any;
    lockScreen(): any;
    unlockScreen(): any;
    clearHistory(): any;
    gotoUrl(url: string): any;
}
