import React from "react";
import loaderImg from "@/assets/loader.gif";

const LoaderAdmin = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
      <img src={loaderImg} className="w-[100px]" alt="loading..." />
    </div>
  );
};

export default LoaderAdmin;
