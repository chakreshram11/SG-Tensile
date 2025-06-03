import React from 'react';

const BackgroundVideo = () => {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://firebasestorage.googleapis.com/v0/b/sg-tensiles.firebasestorage.app/o/Video.mp4?alt=media&token=89a89425-2134-4ad3-b9f0-b238160742f3" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;