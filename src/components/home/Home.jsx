import Business from "@/components/home/Business";
import Advantages from "@/components/home/Advantages";
import HeroHome from "@/components/home/HeroHome";
import CTA from "@/components/CTA";
import FirstLoadNotification from "@/components/home/FirstLoadNotification";
import { FaWhatsapp } from "react-icons/fa";

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
      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-14 h-14 bg-[#00E676] text-yellow-500 z-[100] right-6 bottom-6   `}
      >
        <a
          href="https://api.whatsapp.com/send?phone=573243291412"
          className=""
          target="_blank"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
    </>
  );
};

export default Home;
