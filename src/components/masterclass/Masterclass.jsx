import styles from "@/style";

import Catalogue from "@/components/masterclass/Catalogue";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const Masterclass = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />

          <Catalogue darkMode={darkMode} />

          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Masterclass;
