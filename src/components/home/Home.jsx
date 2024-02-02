import styles from "@/style";
import posterBovinos from "@/assets/poster-bovinos.png";

import Business from "@/components/home/Business";

import Advantages from "@/components/home/Advantages";

import HeroHome from "@/components/home/HeroHome";
import { Link } from "react-router-dom";
import CTA from "@/components/CTA";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { useEffect, useState } from "react";

const Home = ({ darkMode, b, setB }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = () => {
    setB(false);
  };

  return (
    <>
      {b && (
        /* <div className="fixed inset-0 z-50 flex items-center  justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[280px] sm:w-[400px] md:w-[700px] h-auto  rounded-lg p-8  relative">
            <div className="flex justify-end absolute top-0 right-0 m-2">
              <button
                className="btn btn-sm btn-circle btn-primary z-50 "
                onClick={closeModal}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <figure className="mt-2">
              <img
                src={posterBovinos}
                alt=""
                className="w-[100%] rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link to="/bovinos">
                  <button
                    onClick={closeModal}
                    className={`${styles.button} bg-primary `}
                  >
                    Mas Información
                  </button>
                </Link>
              </div>
            </figure>
          </div>
        </div> */
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <motion.div
            /* variants={fadeIn("left", "spring", 0.1, 2.5)} */
            className="relative mx-4"
          >
            {/* <img
              src={posterBovinos}
              alt=""
              className="w-[100%] max-h-[80vh] rounded-2xl"
            /> */}
            <button
              className="btn btn-sm btn-circle btn-primary z-50 absolute top-6 right-6 "
              onClick={closeModal}
            >
              <FaTimes className="text-xl" />
            </button>
            <figure className="mt-2">
              <img
                src={posterBovinos}
                alt=""
                className="w-[100%] max-h-[80vh] rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link to="/bovinos">
                  <button
                    onClick={closeModal}
                    className={`${styles.button} bg-primary `}
                  >
                    Mas Información
                  </button>
                </Link>
              </div>
            </figure>
          </motion.div>
        </motion.div>
      )}
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
