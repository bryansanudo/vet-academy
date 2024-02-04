import styles from "@/style";

import Business from "@/components/login/Business";
import Advantages from "@/components/login/Advantages";

import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";

const Login = ({ darkMode, b, setB }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} h-screen`}
      >
        <div className={`${styles.boxWidth}`}>
          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <Advantages darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Login;
