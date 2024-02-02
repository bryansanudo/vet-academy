import styles, { layout } from "@/style";
import { Link } from "react-router-dom";

import image from "@/assets/about-us-2.jpg";

import { GoDot } from "react-icons/go";
import CountDown from "@/components/CountDown";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import Metodology from "@/components/bovinos/Metodology";
import bovinos from "@/assets/courses/curso-6.png";

const Inscriptions = ({ darkMode }) => {
  return (
    /*  <div
      className={` bg-gray-100 w-[20%] flex-col items-center fixed right-0 top-32 md:flex hidden z-30 justify-center  shadow-md  rounded-xl pb-6 ml-auto mr-5   ${
        darkMode ? "shadow-white" : "shadow-black"
      }`}
    >
      <motion.div className=" flex flex-col items-center md:items-start mt-6 px-6 ">
        <motion.ul className="w-full  ">
          <div className="flex items-start justify-start border-b-2 border-gray-300 border-opacity-100 dark:border-opacity-50 gap-2 py-1">
            <GoDot className="text-primary text-3xl" />
            <li
              className={` w-full text-[18px] leading-[30.8px]  ${
                darkMode ? "text-dimWhite" : "text-black"
              }`}
            >
              32 charlas en vivo por la plataforma Zoom.
            </li>
          </div>
          <div className="flex items-start justify-center border-b-2 border-gray-300 border-opacity-100 dark:border-opacity-50 gap-2 py-1">
            <GoDot className="text-primary text-3xl" />
            <li
              className={` w-full text-[18px] leading-[30.8px]  ${
                darkMode ? "text-dimWhite" : "text-black"
              }`}
            >
              Grabaciones disponibles durante 2 meses.
            </li>
          </div>
          <div className="flex items-start justify-center border-b-2 border-gray-300 border-opacity-100 dark:border-opacity-50 gap-2 py-1">
            <GoDot className="text-primary text-3xl" />
            <li
              className={` w-full text-[18px] leading-[30.8px]  ${
                darkMode ? "text-dimWhite" : "text-black"
              }`}
            >
              Docentes expertos en el área con reconocimiento internacional y
              experiencia en docencia en pregrado y posgrado.
            </li>
          </div>
          <div className="flex items-start justify-center border-b-2 border-gray-300 border-opacity-100 dark:border-opacity-50 gap-2 py-1">
            <GoDot className="text-primary text-3xl" />
            <li
              className={` w-full text-[18px] leading-[30.8px]  ${
                darkMode ? "text-dimWhite" : "text-black"
              }`}
            >
              Certificado de asistencia al finalizar.
            </li>
          </div>
          <div className="flex items-start justify-center border-b-2 border-gray-300 border-opacity-100 dark:border-opacity-50 gap-2 py-1">
            <GoDot className="text-primary text-3xl" />
            <li
              className={` w-full text-[18px] leading-[30.8px]  ${
                darkMode ? "text-dimWhite" : "text-black"
              }`}
            >
              Precio (300 USD🌎 - 1'000.000 COP)
            </li>
          </div>
        </motion.ul>

        <CountDown />

        <div className="flex w-full items-center md:justify-start justify-center ">
          <Link to="/contact">
            <button className={`${styles.button} bg-primary  `}>
              Inscripciones
            </button>
          </Link>
        </div>
      </motion.div>
    </div> */
    <div className="card bg-base-100   shadow-md shadow-primary fixed right-8 top-32 z-30">
      <figure className="relative">
        <img src={bovinos} className="h-[400px] w-[400px]" alt="Shoes" />
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link to="">
            <button className="btn btn-primary">Más Información</button>
          </Link>
        </div> */}
      </figure>
      <div className="flex flex-col items-center rounded-b-2xl justify-center py-8">
        <h2 className="card-title">Bovinos en la clínica diaria</h2>

        <div className="flex items-center justify-center gap-4">
          <CountDown />
        </div>
        <span className=" font-bold mt-4  ">$1.000.000</span>
        <Link to="/contact">
          <button className={`${styles.button} bg-primary  `}>
            Inscripciones
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inscriptions;
