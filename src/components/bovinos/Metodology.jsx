import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { GoDot } from "react-icons/go";

import d1 from "@/assets/gallery/d1.png";
import d2 from "@/assets/gallery/d2.png";
import d3 from "@/assets/gallery/d3.png";
import d4 from "@/assets/gallery/d4.png";
import d5 from "@/assets/gallery/d5.png";
import d6 from "@/assets/gallery/d6.png";
import d7 from "@/assets/gallery/d7.png";
import d8 from "@/assets/gallery/d8.png";
import d9 from "@/assets/gallery/d9.png";
import Advantages from "./Advantages";

import { FaWhatsapp } from "react-icons/fa";

const cards = [
  {
    id: 1,
    img: d1,
    title: "Flexibilidad de Horarios",
    subtitle:
      "Aprende a tu propio ritmo con nuestros cursos virtuales. Accede al contenido en cualquier momento y desde cualquier lugar.",
  },
  {
    id: 2,
    img: d2,
    title: "Variedad de Contenido Especializado",
    subtitle:
      "Descubre una amplia gama de cursos especializados en áreas clave de la Medicina Veterinaria. ",
  },
  {
    id: 3,
    img: d3,
    title: "Expertos de la Industria como Instructores",
    subtitle:
      "Aprende de los mejores en el campo veterinario. Nuestros cursos están dirigidos por expertos con una vasta experiencia en la industria.",
  },
  {
    id: 4,
    img: d4,
    title: "Interactividad y Participación Activa",
    subtitle:
      "Sumérgete en experiencias de aprendizaje interactivas que fomentan la participación activa y el compromiso. 	",
  },
  {
    id: 5,
    img: d5,
    title: "Apoyo Continuo del Equipo de Vet Academy",
    subtitle:
      "No estás solo en tu viaje de aprendizaje. Nuestro equipo de soporte está siempre disponible para asegurarse de que tengas una experiencia educativa exitosa y enriquecedora.",
  },
  {
    id: 6,
    img: d6,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
  {
    id: 7,
    img: d7,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
  {
    id: 8,
    img: d8,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
  {
    id: 9,
    img: d9,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
];
const services = [
  {
    id: 100,
    motionTime: 1,
    name: "Bienestar Animal",
    consultorias: [
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
    consultorias: [
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
    consultorias: [
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
    consultorias: [
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
    consultorias: [
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
const Metodology = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[15%] h-[100%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Curso Bovinos en la clínica diaria</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <motion.div className="flex flex-col items-center justify-center mx-auto  ">
        {/* metodologia */}

        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Metodología
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6`}>
          Modalidad virtual, compuesta de{" "}
          <span className="text-primary font-bold">32</span> sesiones en vivo a
          través de ZOOM con ingreso a la plataforma académica virtual{" "}
          <span className="cursor-pointer text-primary font-bold">
            <a href=""></a>www.vetacademy.com.co
          </span>
          , donde podrá ver las grabaciones de las clases, material de apoyo y
          demás, podrá acceder desde cualquier lugar del mundo, desde cualquier
          navegador y estará a su disposición 24/7.
        </div>
        <div className={`${styles.subtitle} mb-6 w-full`}>
          <div>
            <span className={`${styles.title}`}>Consultas académicas</span>{" "}
            <div className="flex items-center gap-2">
              <a
                href="mailto:vet.academyeducacion@gmail.com"
                className="hover:scale-105 duration-500 hover:text-primary"
              >
                <span>vet.academyeducacion@gmail.com</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=573243291412"
                className=""
                target="_blank"
              >
                <FaWhatsapp className="text-xl text-primary hover:scale-125 duration-500" />
              </a>
            </div>
          </div>
        </div>

        {/* que incluye este curso */}
        <div className="w-full h-[1px] bg-gray-200" />
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          ¿Qué incluye este curso?
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6 w-full`}>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              Curso impartido por docentes con gran experiencia y
              reconocimiento.
            </div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>Clases en vivo.</div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              Acceso a las grabaciones en cualquier horario (durante 2 meses
              después de la última clase).
            </div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              Quiz para evaluar los conocimientos adquiridos.
            </div>
          </div>
          <div className="flex items-center justify-center   gap-2 py-2 ">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full  `}>Literatura descargable.</div>
          </div>
          <div className="flex items-center justify-center   gap-2 py-2 ">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full  `}>Certificado digital.</div>
          </div>
          <div className="flex items-center justify-center   gap-2 py-2 ">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full  `}>
              Acumulas puntos que te dan descuento en futuros cursos.
            </div>
          </div>
        </div>
        {/* a quien va dirigido */}
        <div className="w-full h-[1px] bg-gray-200" />
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          ¿A quién está dirigido este curso?
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6`}>
          Médicos veterinarios y estudiantes de medicina veterinaria que estén
          interesados en profundizar sus conocimientos en temas que se presentan
          en la clínica diaria de bovinos.
        </div>

        {/*  clases */}
        <div className="w-full h-[1px] bg-gray-200" />
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Plan de estudios
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        {services.map(({ id, name, consultorias, motionTime }) => (
          <motion.div
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
              {consultorias && consultorias.length > 0 && (
                <ul>
                  {consultorias.map(({ id, title, date }) => (
                    <li key={id} className="  w-full">
                      <div className="flex gap-2">
                        <div className="font-bold text-lg text-primary">
                          {id}
                        </div>

                        <div className="flex flex-col w-full">
                          <div
                            className={` ${styles.subtitle} ${
                              darkMode ? "text-white" : "text-black"
                            } mr-4 mt-[2px] `}
                          >
                            {title}
                          </div>
                          <div className=" w-full flex items-center justify-end">
                            <span className={`text-primary `}>{date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-gray-200" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}

        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Evaluación
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6 w-full`}>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              El examen final estará disponible cuando se hayan visto todas las
              clases y participado en la sesión de dudas.
            </div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              El examen está compuesto por 10 preguntas con varias opciones de
              respuesta entre las cuales se debe seleccionar la correcta.
            </div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              Para superar el exámen final, se debe responder correctamente el
              70% de las preguntas.
            </div>
          </div>
          <div className="flex items-center justify-center  gap-2 py-2">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full `}>
              Cada estudiante tendrá tres intentos para realizar el examen
              final.
            </div>
          </div>
          <div className="flex items-center justify-center   gap-2 py-2 ">
            <GoDot className="text-primary text-3xl" />
            <div className={` w-full  `}>
              Una vez superado el exámen final, el estudiante obtendrá un
              diploma de certificación por asistencia.
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Docentes del curso
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <Advantages darkMode={darkMode} />
      </motion.div>
    </div>
  </section>
);

export default Metodology;
