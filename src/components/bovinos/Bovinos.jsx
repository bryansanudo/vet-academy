import styles from "@/style";

import BovinosLayout from "@/components/bovinos/bovinosContent/BovinosLayout";

import HeroSection from "@/components/bovinos/HeroSection";

import Inscriptions from "@/components/bovinos/Inscriptions";
import { useEffect } from "react";

const Bovinos = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <Inscriptions darkMode={darkMode} />
        </div>
      </div>
      <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} md:mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="bovinos" className="pt-20" />

          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <BovinosLayout darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Bovinos;
