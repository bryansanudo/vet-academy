import React from "react";
import styles, { layout } from "@/style";

const VideoComponent = ({ title, module, darkMode, id }) => {
  return (
    <div className=" w-full mr-10   mt-40 md:mt-0 ">
      <div className={`${styles.title}`}>{module}</div>
      <div className={`${styles.subtitle} mt-4`}>
        <span className="text-primary font-bold mr-2">{id}</span>
        {title}
      </div>
      <div className="w-full   ">
        <iframe
          className={`${
            darkMode ? "shadow-white" : "shadow-black"
          } shadow-lg rounded-xl mt-10`}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/-zbghXtvxuE"
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
