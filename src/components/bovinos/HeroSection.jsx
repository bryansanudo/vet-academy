import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import heroVideo from "@/assets/heroVideo.mp4";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div
      name="inicio"
      className="flex items-end justify-center w-full h-[100vh] text-center"
    >
      <video
        ref={videoRef}
        autoPlay
        src={heroVideo}
        loop
        type="video/mp4"
        playsInline
        muted
        className="h-full object-cover w-full absolute "
      ></video>
      {/* <div
        className={` w-full p-8 flex flex-row items-center z-10 justify-center duration-500  gap-10 mb-48 `}
      >
        {isVideoPlaying ? (
          <FaPauseCircle
            size={25}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300 text-primary"
          />
        ) : (
          <FaPlayCircle
            size={25}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-110 duration-300 text-primary"
          />
        )}
      </div> */}

      <div className="absolute top-1/2 left-0 w-full text-white lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider text-center">
        {/* Aquí puedes colocar tu componente de título */}

        <Link to="bovinos" smooth duration={50} className="hidden sm:flex z-50">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 mb-56 mx-auto mt-20 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
