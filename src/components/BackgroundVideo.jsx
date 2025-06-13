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
      {/* 4K screens */}
      <source 
        src="https://firebasestorage.googleapis.com/v0/b/sg-tensiles.firebasestorage.app/o/Video.mp4?alt=media&token=89a89425-2134-4ad3-b9f0-b238160742f3" 
        type="video/mp4" 
        media="(min-width: 1920px)" 
      />
      
      {/* Laptop screens */}
      <source 
        src="https://firebasestorage.googleapis.com/v0/b/sg-tensiles.firebasestorage.app/o/720%20p%20video.mp4?alt=media&token=f7272e1f-e2e0-4a75-bae3-fe74fbf88871" 
        type="video/mp4" 
        media="(min-width: 768px) and (max-width: 1919px)" 
      />
      
      {/* Mobile screens */}
      <source 
        src="https://firebasestorage.googleapis.com/v0/b/sg-tensiles.firebasestorage.app/o/480%20p%20video.mp4?alt=media&token=5c551933-e5e7-4bd6-aada-939ba6b793b1" 
        type="video/mp4" 
        media="(max-width: 767px)" 
      />

      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
