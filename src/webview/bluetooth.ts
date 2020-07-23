import BluetoothInterface from "../interfaces/bluetooth";

declare const __WEBVIEW_API_BLUETOOTH__: BluetoothInterface;

export default function bluetoothApi(): BluetoothInterface {
  const api = __WEBVIEW_API_BLUETOOTH__;

  return {
    // TODO
  };
};
