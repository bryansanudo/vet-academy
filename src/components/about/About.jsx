import styles from "@/style";

import HeroAbout from "@/components/about/HeroAbout";

import Achieve from "@/components/about/Achieve";
import Gallery from "@/components/practices/Gallery";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const About = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <HeroAbout darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          {/* <Business darkMode={darkMode} /> */}

          <Achieve />
          <Gallery />
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}
          {/* <Practices darkMode={darkMode} /> */}
          {/*      <Services darkMode={darkMode} /> */}
          {/*  <Advantages darkMode={darkMode} /> */}
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default About;
