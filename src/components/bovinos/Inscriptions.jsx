import styles, { layout } from "@/style";

import image from "@/assets/about-us-2.jpg";

import { GoDot } from "react-icons/go";
import { Link } from "react-router-dom";
import CountDown from "@/components/CountDown";
import bovinos from "@/assets/courses/curso-6.png";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import Price from "@/components/bovinos/Price";
import { useState } from "react";

const Inscriptions = ({ darkMode }) => {
  const [language, setLanguage] = useState("en");
  return (
    <div
      className={`card  ${
        darkMode ? "bg-dark shadow-white" : "bg-base-100 shadow-gray-300"
      }   shadow-sm  fixed right-5 top-36 z-30 hidden md:flex  md:w-[20%]      `}
    >
      <figure className="relative">
        <img src={bovinos} className=" object-contain" alt="Shoes" />
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link to="">
            <button className="btn btn-primary">Más Información</button>
          </Link>
        </div> */}
      </figure>
      <div className="flex flex-col items-center rounded-b-2xl justify-center mt-4  ">
        {/*   <h2 className={`${styles.title}`}>Bovinos en la clínica diaria</h2> */}

        {/*  <div className="flex items-center justify-center  ">
          <CountDown />
        </div> */}
        {/* <span className={`font-bold mt-4  ${styles.title}`}>
          $1.000.000 COP
        </span> */}
        <div className="flex flex-col  items-center justify-center mt-4">
          <Price
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
          />
          <div className="flex justify-between mt-2">
            {language === "en" ? (
              <div className="flex  gap-2 items-end justify-center">
                <span className="text-primary ">$220</span>
              </div>
            ) : language === "es" ? (
              <div className="flex  gap-2 items-end justify-center">
                <span className="text-primary ">$750.000 </span>
              </div>
            ) : (
              <span className="text-primary">Otro</span>
            )}
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=573243291412"
          className=""
          target="_blank"
        >
          <button className={`${styles.button} bg-primary my-4  `}>
            Inscripciones
          </button>
        </a>
      </div>
    </div>
  );
};

export default Inscriptions;
