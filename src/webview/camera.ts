import CameraInterface from "../interfaces/camera";

declare const __WEBVIEW_API_CAMERA__: CameraInterface;

export default function cameraApi(): CameraInterface {
  const api = __WEBVIEW_API_CAMERA__;

  return {
    // TODO
  };
};
