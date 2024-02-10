import React from "react";
import styles, { layout } from "@/style";

const VideoComponent = ({ title, module, darkMode, id, src, distemper }) => {
  return (
    <div className=" w-full mr-10   mt-40 md:mt-0 ">
      <div className={`${styles.title}`}>{module}</div>
      <div className={`${styles.subtitle} `}>
        <span className="text-primary font-bold mr-2">{id}</span>
        {title}
        <span className={`${styles.title}`}>{distemper}</span>
      </div>
      <div className="w-full   ">
        <iframe
          className={`${
            darkMode ? "shadow-white" : "shadow-black"
          } shadow-lg rounded-xl mt-10`}
          width="100%"
          height="400"
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
