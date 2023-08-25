// LocalVideo.js
import React, { useEffect, useRef } from 'react';

const LocalVideo = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return <video ref={videoRef} autoPlay muted />;
};

export default LocalVideo;