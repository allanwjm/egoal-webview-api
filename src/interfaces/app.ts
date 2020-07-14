export interface App {
  getIMEI(index?: number): string;
  getSN(): string;
  getVersion(): string;
  restartApp();
  refresh();
  lockScreen();
  unlockScreen();
  clearHistory();
  gotoUrl(url: string);
}
