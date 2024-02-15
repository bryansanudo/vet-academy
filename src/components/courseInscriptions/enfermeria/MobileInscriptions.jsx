import styles from "@/style";

import curso9 from "@/assets/courses/curso-9.png";

import { useState } from "react";
import Price from "@/components/courseInscriptions/bovinos/Price";

const MobileInscriptions = ({ darkMode }) => {
  const [language, setLanguage] = useState("en");

  return (
    <div
      className={`card  ${
        darkMode ? "bg-dark shadow-white" : "bg-base-100 shadow-gray-300"
      }   shadow-sm mb-20 flex md:hidden `}
    >
      <figure className="relative">
        <img src={curso9} className=" object-contain" alt="Shoes" />
      </figure>
      <div className="flex flex-col items-center rounded-b-2xl justify-center mt-4  ">
        <div className="flex flex-col  items-center justify-center mt-4">
          <Price
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
          />
          <div className="flex justify-between mt-2">
            {language === "en" ? (
              <div className="flex  gap-2 items-end justify-center">
                <span className="text-primary ">$90</span>
              </div>
            ) : language === "es" ? (
              <div className="flex  gap-2 items-end justify-center">
                <span className="text-primary ">$350.000 </span>
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
          <button className={`${styles.button} bg-primary my-4`}>
            Inscripciones
          </button>
        </a>
      </div>
    </div>
  );
};

export default MobileInscriptions;
