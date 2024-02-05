import React from "react";
import styles, { layout } from "@/style";

const VideoComponent = ({ title, module }) => {
  return (
    <div className=" w-full mr-10   mt-40 md:mt-0 ">
      <div className={`${styles.title}`}>{module}</div>
      <div className={`${styles.subtitle}`}>{title}</div>
      <div className="w-full   ">
        <iframe
          width="100%"
          height="315"
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
