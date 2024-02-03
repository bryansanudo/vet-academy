import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import d1 from "@/assets/gallery/d1.png";
import d2 from "@/assets/gallery/d2.png";
import d3 from "@/assets/gallery/d3.png";
import d4 from "@/assets/gallery/d4.png";
import d5 from "@/assets/gallery/d5.png";
import d6 from "@/assets/gallery/d6.png";
import d7 from "@/assets/gallery/d7.png";
import d8 from "@/assets/gallery/d8.png";
import d9 from "@/assets/gallery/d9.png";

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

const Professors = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter}  w-full flex-col relative `}
  >
    <div className="w-full h-[1px] bg-gray-200" />
    <h2 className={`${styles.heading3} w-full text-primary  text-center `}>
      Docentes del curso
    </h2>
    <div className="w-full h-[1px] bg-gray-200" />

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <motion.div className="flex flex-col items-center justify-center mx-auto ">
        {cards.map(({ id, img, title, subtitle }) => (
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={id}
            className={` p-2 w-[100%] sm:w-[60%]    `}
          >
            <motion.img
              variants={zoomIn(0.2, 2)}
              src={img}
              className={`rounded-xl shadow-md mb-8 ${
                darkMode ? "" : "shadow-black"
              }`}
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Professors;
