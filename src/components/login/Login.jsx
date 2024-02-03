import styles from "@/style";
import posterBovinos from "@/assets/poster-bovinos.png";

import Business from "@/components/login/Business";

import Advantages from "@/components/home/Advantages";

import HeroHome from "@/components/home/HeroHome";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";

const Login = ({ darkMode, b, setB }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = () => {
    setB(false);
  };

  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="scrol" className="pt-20" />
          <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1] mt-20">
            <h2 className={styles.heading2}>
              Iniciar Sesión
              <br className="sm:block hidden" />
            </h2>
          </div>
          <Business darkMode={darkMode} />

          {/* <Achieve /> */}
          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}
          {/* <Practices darkMode={darkMode} /> */}
          {/*      <Services darkMode={darkMode} /> */}
          {/*   <Advantages darkMode={darkMode} /> */}
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          {/* <CTA darkMode={darkMode} /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
