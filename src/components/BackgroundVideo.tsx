import React from "react";
import video from "../assets/bg-2m.mp4";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      <video
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
    </div>
  );
};

export default BackgroundVideo;
