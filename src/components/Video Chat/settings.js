import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "d75d039d0f9d4a3d8665dbbfaa530677";
const token =
  "007eJxTYEjPMnxZPbPhv85EteTi1L9rts7gMf2z9tIzz/MR9z7Pyb6vwJBibppiYGyZYpBmmWKSaJxiYWZmmpKUlJaYaGpsYGZu3i30P6UhkJFBbONtRkYGCATxWRhyEzPzGBgAJ7AiiA==";

export const config = { mode: "rtc", codec: "vp9", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

