import styles from "@/style";

import Catalogue from "@/components/courses/Catalogue";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const Courses = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/*   <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <HeroAbout darkMode={darkMode} />
        </div>
      </div> */}

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}

          <Catalogue darkMode={darkMode} />

          {/*      <Services darkMode={darkMode} /> */}

          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Courses;
