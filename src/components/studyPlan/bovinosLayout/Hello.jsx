import React from "react";
import about from "@/assets/about-us.png";
import styles from "@/style";

const Hello = ({ name, course }) => {
  return (
    <div className=" w-full md:flex hidden flex-col items-center">
      <div
        className={`font-semibold xs:text-[48px] text-[28px]  xs:leading-[76.8px] leading-[66.8px] w-full dark:text-white text-black`}
      >
        Hola {name}, en VetAcademy nos complace darte la bienvenida al aula
        virtual de {course}
      </div>

      {/* <img src={about} alt="" className="rounded-xl w-[50%]" /> */}
    </div>
  );
};

export default Hello;
