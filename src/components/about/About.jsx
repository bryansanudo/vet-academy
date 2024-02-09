import HeroAbout from "@/components/about/HeroAbout";
import AboutUs from "@/components/about/AboutUs";
import Gallery from "@/components/about/Gallery";
import CTA from "@/components/CTA";

import styles from "@/style";
import { useEffect } from "react";

const About = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`dark:bg-accent  ${styles.flexStart} mt-10`}>
        <div className={`${styles.boxWidth}`}>
          <HeroAbout darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          <AboutUs />
          <Gallery />
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default About;
