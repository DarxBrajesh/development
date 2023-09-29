import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';


const AudioCall = () => {
  
    const [message, setMessage] = useState('');
    const [agoraEngine, setAgoraEngine] = useState(null);
    const [localAudioTrack, setLocalAudioTrack] = useState(null);
    const [remoteAudioTrack, setRemoteAudioTrack] = useState(null);
    const [remoteUid, setRemoteUid] = useState(null);
  
    const options = {
      appId: 'd75d039d0f9d4a3d8665dbbfaa530677',
      channel: 'main',
      token: '007eJxTYEjPMnxZPbPhv85EteTi1L9rts7gMf2z9tIzz/MR9z7Pyb6vwJBibppiYGyZYpBmmWKSaJxiYWZmmpKUlJaYaGpsYGZu3i30P6UhkJFBbONtRkYGCATxWRhyEzPzGBgAJ7AiiA==',
      uid: 0,
    };
  
    useEffect(() => {
      // Create an instance of the Agora Engine
      const engine = AgoraRTC.createClient({ mode: "rtc", codec: "vp9" });
      setAgoraEngine(engine);
  
      engine.on("user-published", async (user, mediaType) => {
        // Subscribe to the remote user when the SDK triggers the "user-published" event.
        await engine.subscribe(user, mediaType);
        console.log("subscribe success");
  
        // Subscribe and play the remote audio track.
        if (mediaType === "audio") {
          setRemoteUid(user.uid);
          setRemoteAudioTrack(user.audioTrack);
          // Play the remote audio track.
          user.audioTrack.play();
          showMessage("Remote user connected: " + user.uid);
        }
      });
  
      engine.on("user-unpublished", user => {
        console.log(user.uid + " has left the channel");
        showMessage("Remote user has left the channel");
      });
  
      return () => {
        // Cleanup code when the component unmounts
        if (engine) {
          engine.removeAllListeners();
        }
      };
    }, []);
  
    const startCall = async () => {
     
      await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
      showMessage("Joined channel: " + options.channel);
        const localAudio = await AgoraRTC.createMicrophoneAudioTrack();
      setLocalAudioTrack(localAudio);
        await agoraEngine.publish(localAudio);
      console.log("Publish success!");
    };
  
    const leaveCall = async () => {
      
      if (localAudioTrack) {
        localAudioTrack.close();
      }
  
      await agoraEngine.leave();
      console.log("You left the channel");
  
      window.location.reload();
    };
  
    const showMessage = (text) => {
      setMessage(text);
    };
  
    return (
      <div>
        <div id="message">{message}</div>
        {remoteUid ==''?<button id="join" onClick={startCall}>Join Call</button>:<button id="leave" onClick={leaveCall}>Leave Call</button>}
       
      </div>
    );
  }
export default AudioCall;
