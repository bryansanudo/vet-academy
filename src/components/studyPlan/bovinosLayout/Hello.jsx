import React from "react";
import about from "@/assets/about-us.png";
import styles from "@/style";

const Hello = ({ name, course }) => {
  return (
    <div className="bg-red-500 w-full flex flex-col items-center">
      <div className="">
        Hola {name},es un placer para todo el equipo de vetAcademy darte la
        bienvenida al curso de
        {course}
      </div>
      <img src={about} alt="" className="rounded-xl w-[50%]" />
    </div>
  );
};

export default Hello;
