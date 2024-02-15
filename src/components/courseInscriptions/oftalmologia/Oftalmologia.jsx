import styles from "@/style";

import OftalmologiaLayout from "@/components/courseInscriptions/oftalmologia/OftalmologiaLayout";

import Inscriptions from "@/components/courseInscriptions/oftalmologia/Inscriptions";
import { useEffect } from "react";

const Oftalmologia = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-28 md:mt-0`}
      >
        <div className={`${styles.boxWidth}`}>
          <Inscriptions darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} md:mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="bovinos" className="" />
          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />

          <OftalmologiaLayout darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Oftalmologia;
