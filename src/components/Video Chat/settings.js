import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "d75d039d0f9d4a3d8665dbbfaa530677";
const token =
  "007eJxTYEi5m/b9qOAZufvLn1YLL/14xWWDuF2xskB4fHpM3LJ922UUGFLMTVMMjC1TDNIsU0wSjVMszMxMU5KS0hITTY0NzMzNP+p/T2kIZGQw/riGmZEBAkF8FobcxMw8BgYAkQcglg==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";

