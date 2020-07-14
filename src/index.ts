import dummyApp from "./dummy/app";
import {App} from "./interfaces/app";

const isWebviewApp = window["__WEBVIEW_API__"] !== undefined;

export const app: App = isWebviewApp ? null : dummyApp;
