import React from "react";

const Hello = ({ name, course }) => {
  return (
    <div className="bg-red-500 w-full">
      Hola {name},es un placer para todo el equipo de vetAcademy darte la
      bienvenida al curso de
      {course}
    </div>
  );
};

export default Hello;
