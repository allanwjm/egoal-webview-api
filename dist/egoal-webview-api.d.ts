import AppInterface from "./interfaces/app";
import BluetoothInterface from "./interfaces/bluetooth";
import CameraInterface from "./interfaces/camera";
import LocationInterface from "./interfaces/location";
import MessageInterface from "./interfaces/message";
import StorageInterface from "./interfaces/storage";
import WebviewInterface from "./interfaces/webview";
export default interface EgoalWebviewApi {
    appApi: AppInterface;
    bluetoothApi: BluetoothInterface;
    cameraApi: CameraInterface;
    locationApi: LocationInterface;
    messageApi: MessageInterface;
    storageApi: StorageInterface;
    webviewApi: WebviewInterface;
}
