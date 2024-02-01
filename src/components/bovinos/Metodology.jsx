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

const Metodology = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Plan de Estudios</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <motion.div className="flex flex-col items-center justify-center mx-auto  ">
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Curso Bovinos en la clínica diaria
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id
          amet deserunt dolorum eos? Expedita sit rerum quidem, doloremque
          cupiditate accusamus placeat a quod repudiandae nisi officia voluptas
          magni culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias id amet deserunt dolorum eos? Expedita sit rerum quidem,
          doloremque cupiditate accusamus placeat a quod repudiandae nisi
          officia voluptas magni culpa?
        </div>
        <div className={`${styles.subtitle} mb-6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id
          amet deserunt dolorum eos? Expedita sit rerum quidem, doloremque
          cupiditate accusamus placeat a quod repudiandae nisi officia voluptas
          magni culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias id amet deserunt dolorum eos? Expedita sit rerum quidem,
          doloremque cupiditate accusamus placeat a quod repudiandae nisi
          officia voluptas magni culpa?
        </div>
        <div className={`${styles.subtitle} mb-6 w-full`}>
          <p>
            <span className={`${styles.title}`}>
              ¿A quién va dirigido el curso?:
            </span>{" "}
            Este curso está orientado para estudiantes de medicina veterinaria,
            estudiantes de técnica auxiliar y auxiliares graduados con o sin
            experiencia.
          </p>
          <p>
            <span className={`${styles.title}`}>Modalidad:</span> Online.
          </p>
          <span className={`${styles.title}`}>
            Semipersonalizado Consultas académicas:
          </span>{" "}
          vet.academyeducacion@gmail.com
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
          Metodología
        </h2>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className={`${styles.subtitle} my-6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id
          amet deserunt dolorum eos? Expedita sit rerum quidem, doloremque
          cupiditate accusamus placeat a quod repudiandae nisi officia voluptas
          magni culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias id amet deserunt dolorum eos? Expedita sit rerum quidem,
          doloremque cupiditate accusamus placeat a quod repudiandae nisi
          officia voluptas magni culpa?
        </div>
        <div className={`${styles.subtitle} mb-6`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id
          amet deserunt dolorum eos? Expedita sit rerum quidem, doloremque
          cupiditate accusamus placeat a quod repudiandae nisi officia voluptas
          magni culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias id amet deserunt dolorum eos? Expedita sit rerum quidem,
          doloremque cupiditate accusamus placeat a quod repudiandae nisi
          officia voluptas magni culpa?
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
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
