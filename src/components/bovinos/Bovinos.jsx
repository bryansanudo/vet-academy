import styles from "@/style";

import Business from "@/components/bovinos/Business";

import Advantages from "@/components/bovinos/Advantages";
import Metodology from "@/components/bovinos/Metodology";

import HeroHome from "@/components/bovinos/HeroHome";
import Clients from "@/components/bovinos/Clients";
import CountDown from "@/components/CountDown";

import HeroSection from "@/components/bovinos/HeroSection";

import CTA from "@/components/CTA";

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
          <Inscriptions />
        </div>
      </div>
      <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="bovinos" className="pt-20" />
          <Business darkMode={darkMode} />

          {/* <Achieve /> */}
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}
          {/* <Practices darkMode={darkMode} /> */}
          {/*      <Services darkMode={darkMode} /> */}
          {/*  <Advantages darkMode={darkMode} /> */}
          {/* <Metodology darkMode={darkMode} /> */}
          {/*  <div className="mt-40">
            <h2 className={styles.heading2}>Docentes</h2>
            <Clients />
          </div> */}
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          {/* <CTA darkMode={darkMode} /> */}
        </div>
      </div>
    </>
  );
};

export default Bovinos;
