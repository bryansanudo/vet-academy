import styles, { layout } from "@/style";
import { MdMoreTime } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { LuFileVideo } from "react-icons/lu";
import { NavLink, Route, Routes } from "react-router-dom";
import VideoComponent from "@/components/studyPlan/bovinosLayout/VideoComponent";
import { useEffect } from "react";

const services = [
  {
    id: 100,
    motionTime: 1,
    name: "Bienestar Animal",
    sessions: [
      {
        id: 1,
        title: "Conceptos generales de bienestar animal en bovinos.",
        date: "Febrero 20",
      },
      { id: 2, title: "Etologia bovina.", date: "Febrero 21" },
      { id: 3, title: "Manejo racional de bovinos.", date: "Febrero 27" },
      {
        id: 4,
        title:
          "Enfoque económico del bienestar animal: Efectos en la producción de carne y leche.",
        date: "Febrero 28",
      },
    ],
  },
  {
    id: 200,
    motionTime: 2,
    name: "Nutrición",
    sessions: [
      {
        id: 5,
        title: "Nutrición y su importancia en la ganaderia.",
        date: "Marzo 5",
      },
      { id: 6, title: "Fisiología ruminal.", date: "Marzo 7" },
      { id: 7, title: "Metabolismo de nutrientes.", date: "Marzo 11" },
      { id: 8, title: "Alimentación de terneras.", date: "Marzo 13" },
      {
        id: 9,
        title: "Enfermedades metabólicas y periodo de transición.",
        date: "Marzo 14",
      },
    ],
  },
  {
    id: 300,
    motionTime: 3,
    name: "Medicina",
    sessions: [
      { id: 10, title: "Planes sanitarios en bovinos.", date: "Abril 2" },
      {
        id: 11,
        title: "Diagnóstico y manejo del cuadro de hemoparásitos en bovino.",
        date: "Abril 4",
      },
      {
        id: 12,
        title: "Manejo clínico de diarreas en terneros.",
        date: "Abril 9",
      },
      {
        id: 13,
        title: "Manejo del complejo respiratorio bovino.",
        date: "Abril 11",
      },
      {
        id: 14,
        title: "Manejo de las principales patologías podales.",
        date: "Abril 16",
      },
      { id: 15, title: "Manejo clínico de la mastitis.", date: "Abril 18" },
      {
        id: 16,
        title: "Manejo clínico de la distocia y accidentes de la gestación.",
        date: "Abril 23",
      },
      {
        id: 17,
        title: "Manejo clínico de la enfermedad posparto.",
        date: "Abril 25",
      },
      { id: 18, title: "Sindrome de la vaca caída.", date: "Abril 30" },
      {
        id: 19,
        title: "Manejo clínico de Desplazamiento de abomaso y torsión.",
        date: "Mayo 2",
      },
      {
        id: 20,
        title: "Manejo de la emergencia en el bovino.",
        date: "Mayo 7",
      },
    ],
  },
  {
    id: 400,
    motionTime: 4,
    name: "Anestesia y Cirugía",
    sessions: [
      { id: 25, title: "Anestesia.", date: "Mayo 9" },
      { id: 24, title: "Cirugías frecuentes", date: "Mayo 14" },
      { id: 23, title: "Cirugías electivas reproductivas", date: "Mayo 15" },
      {
        id: 22,
        title: "Cirugía en patologías reproductivas.",
        date: "Mayo 16",
      },
      { id: 21, title: "Cirugias digestivas.", date: "Mayo 20" },
    ],
  },
  {
    id: 500,
    motionTime: 5,
    name: "Reproducción",
    sessions: [
      {
        id: 26,
        title: "Anatomía y fisiología del aparato reproductor de la vaca.",
        date: "Mayo 21",
      },
      { id: 27, title: "Etapas del ciclo estral", date: "Mayo 22" },
      { id: 28, title: "Técnicas de detección de celos", date: "Mayo 23" },
      {
        id: 29,
        title: "Tecnica de inseminación artificial y manejo de semen bovino.",
        date: "Mayo 28",
      },
      { id: 30, title: "Protocolos de sincronización.", date: "Mayo 29" },
      { id: 31, title: "Manejo de la vaca en transición.", date: "Mayo 30" },
      {
        id: 32,
        title: "Protocolo de inducción y atención del neonato.",
        date: "Junio 4",
      },
    ],
  },
];

const videosComponents = [
  {
    id: 1,
    title: "Conceptos generales de bienestar animal en bovinos.",
    date: "Febrero 20",
    module: "Bienestar Animal",
  },
  {
    id: 2,
    title: "Etologia bovina.",
    date: "Febrero 21",
    module: "Bienestar Animal",
  },
  {
    id: 3,
    title: "Manejo racional de bovinos.",
    date: "Febrero 27",
    module: "Bienestar Animal",
  },
  {
    id: 4,
    title:
      "Enfoque económico del bienestar animal: Efectos en la producción de carne y leche.",
    date: "Febrero 28",
    module: "Bienestar Animal",
  },

  {
    id: 5,
    title: "Nutrición y su importancia en la ganaderia.",
    date: "Marzo 5",
    module: "Nutrición",
  },
  {
    id: 6,
    title: "Fisiología ruminal.",
    date: "Marzo 7",
    module: "Nutrición",
  },
  {
    id: 7,
    title: "Metabolismo de nutrientes.",
    date: "Marzo 11",
    module: "Nutrición",
  },
  {
    id: 8,
    title: "Alimentación de terneras.",
    date: "Marzo 13",
    module: "Nutrición",
  },
  {
    id: 9,
    title: "Enfermedades metabólicas y periodo de transición.",
    date: "Marzo 14",
    module: "Nutrición",
  },

  {
    id: 10,
    title: "Planes sanitarios en bovinos.",
    date: "Abril 2",
    module: "Medicina",
  },
  {
    id: 11,
    title: "Diagnóstico y manejo del cuadro de hemoparásitos en bovino.",
    date: "Abril 4",
    module: "Medicina",
  },
  {
    id: 12,
    title: "Manejo clínico de diarreas en terneros.",
    date: "Abril 9",
    module: "Medicina",
  },
  {
    id: 13,
    title: "Manejo del complejo respiratorio bovino.",
    date: "Abril 11",
    module: "Medicina",
  },
  {
    id: 14,
    title: "Manejo de las principales patologías podales.",
    date: "Abril 16",
    module: "Medicina",
  },
  {
    id: 15,
    title: "Manejo clínico de la mastitis.",
    date: "Abril 18",
    module: "Medicina",
  },
  {
    id: 16,
    title: "Manejo clínico de la distocia y accidentes de la gestación.",
    date: "Abril 23",
    module: "Medicina",
  },
  {
    id: 17,
    title: "Manejo clínico de la enfermedad posparto.",
    date: "Abril 25",
    module: "Medicina",
  },
  {
    id: 18,
    title: "Sindrome de la vaca caída.",
    date: "Abril 30",
    module: "Medicina",
  },
  {
    id: 19,
    title: "Manejo clínico de Desplazamiento de abomaso y torsión.",
    date: "Mayo 2",
    module: "Medicina",
  },
  {
    id: 20,
    title: "Manejo de la emergencia en el bovino.",
    date: "Mayo 7",
    module: "Medicina",
  },

  {
    id: 25,
    title: "Anestesia.",
    date: "Mayo 9",
    module: "Anestesia y Cirugía",
  },
  {
    id: 24,
    title: "Cirugías frecuentes",
    date: "Mayo 14",
    module: "Anestesia y Cirugía",
  },
  {
    id: 23,
    title: "Cirugías electivas reproductivas",
    date: "Mayo 15",
    module: "Anestesia y Cirugía",
  },
  {
    id: 22,
    title: "Cirugía en patologías reproductivas.",
    date: "Mayo 16",
    module: "Anestesia y Cirugía",
  },
  {
    id: 21,
    title: "Cirugias digestivas.",
    date: "Mayo 20",
    module: "Anestesia y Cirugía",
  },

  {
    id: 26,
    title: "Anatomía y fisiología del aparato reproductor de la vaca.",
    date: "Mayo 21",
    module: "Reproducción",
  },
  {
    id: 27,
    title: "Etapas del ciclo estral",
    date: "Mayo 22",
    module: "Reproducción",
  },
  {
    id: 28,
    title: "Técnicas de detección de celos",
    date: "Mayo 23",
    module: "Reproducción",
  },
  {
    id: 29,
    title: "Tecnica de inseminación artificial y manejo de semen bovino.",
    date: "Mayo 28",
    module: "Reproducción",
  },
  {
    id: 30,
    title: "Protocolos de sincronización.",
    date: "Mayo 29",
    module: "Reproducción",
  },
  {
    id: 31,
    title: "Manejo de la vaca en transición.",
    date: "Mayo 30",
    module: "Reproducción",
  },
  {
    id: 32,
    title: "Protocolo de inducción y atención del neonato.",
    date: "Junio 4",
    module: "Reproducción",
  },
];

const BovinosIndex = ({ darkMode }) => {
  const scroltop = () => {
    window.scrollTo(0, 0);
  };
  const activeLink = ({ isActive }) =>
    isActive ? " border border-primary m-4 p-1 rounded-xl" : "";

  return (
    <section
      id="clients"
      className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}
    >
      <div
        className={`red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
      />

      <motion.div className="max-w-[400px] border-r-2 pr-4 mx-auto md:mx-10 flex flex-col items-center justify-center  ">
        {services.map(({ id, name, sessions, motionTime }) => (
          <div
            tabIndex={0}
            key={id}
            className={`  ${
              darkMode ? " " : ""
            }  text-primary my-6 rounded-box w-full `}
          >
            <div className="collapse-title flex items-center gap-4   ">
              <div
                className={`${styles.title} ${
                  darkMode ? "text-white" : "text-black"
                }   `}
              >
                {name}
              </div>
            </div>
            <div
              className={`${styles.sectionText}  font-poppins font-normal text-[16px] leading-[24px]  `}
            >
              {sessions && sessions.length > 0 && (
                <ul>
                  {sessions.map(({ id, title, date }) => (
                    <li key={id} className="  w-full">
                      <div className="flex gap-2">
                        <div className="font-bold text-lg text-primary">
                          {id}
                        </div>

                        <NavLink
                          onClick={scroltop}
                          to={title}
                          className={activeLink}
                        >
                          <div className="flex items-center  w-full">
                            <div
                              className={` ${styles.subtitle} ${
                                darkMode ? "text-white" : "text-black"
                              } mr-4 mt-[2px] `}
                            >
                              {title}
                            </div>
                            <div>
                              <LuFileVideo className="text-2xl hover:scale-105 duration-500 cursor-pointer" />
                            </div>
                          </div>
                        </NavLink>
                      </div>
                      <div className="w-full h-[1px] bg-gray-200" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      <Routes>
        {videosComponents.map(({ id, title, module }) => (
          <Route
            key={id}
            path={title}
            element={
              <VideoComponent
                darkMode={darkMode}
                id={id}
                title={title}
                module={module}
              />
            }
          />
        ))}
      </Routes>
    </section>
  );
};

export default BovinosIndex;
