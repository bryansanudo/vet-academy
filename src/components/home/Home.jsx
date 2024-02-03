import Business from "@/components/home/Business";
import Advantages from "@/components/home/Advantages";
import HeroHome from "@/components/home/HeroHome";
import CTA from "@/components/CTA";
import FirstLoadNotification from "@/components/home/FirstLoadNotification";

import styles from "@/style";
import { useEffect } from "react";

const Home = ({ darkMode, b, setB }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {b && <FirstLoadNotification setB={setB} />}

      <HeroHome darkMode={darkMode} />
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="scrol" className="pt-20" />

          <div
            className={`
            pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />

          <Business darkMode={darkMode} />
          <Advantages darkMode={darkMode} />
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Home;
