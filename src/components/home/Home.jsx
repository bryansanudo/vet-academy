import styles from "@/style";

import Business from "@/components/home/Business";

import Advantages from "@/components/home/Advantages";

import HeroHome from "@/components/home/HeroHome";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const Home = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroHome darkMode={darkMode} />
      {/*   <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}></div>
      </div> */}

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="scrol" className="pt-20" />
          <Business darkMode={darkMode} />

          {/* <Achieve /> */}
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}
          {/* <Practices darkMode={darkMode} /> */}
          {/*      <Services darkMode={darkMode} /> */}
          <Advantages darkMode={darkMode} />
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Home;
