import LocationInterface from "../interfaces/location";

declare const __WEBVIEW_API_LOCATION__: LocationInterface;

export default function locationApi(): LocationInterface {
  const api = __WEBVIEW_API_LOCATION__;

  return {
    // TODO
  };
};
