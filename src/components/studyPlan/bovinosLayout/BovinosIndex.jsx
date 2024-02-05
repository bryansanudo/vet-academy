import styles from "@/style";
import { MdMoreTime } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { LuFileVideo } from "react-icons/lu";

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

const BovinosIndex = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-20 `}
  >
    <div
      className={`red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Grabaciones Bovinos</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>
    <div className=" w-full  flex items-center justify-center">
      <motion.div className=" flex flex-col md:w-1/2 items-center justify-center  ">
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
    </div>
  </section>
);

export default BovinosIndex;
