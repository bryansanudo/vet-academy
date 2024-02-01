import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import g1 from "@/assets/practices/g1.jpg";
import g2 from "@/assets/practices/g2.jpg";
import g3 from "@/assets/practices/g3.jpg";
import g4 from "@/assets/practices/g4.jpg";
import g5 from "@/assets/practices/g5.jpg";
import g6 from "@/assets/practices/g6.jpg";
import g7 from "@/assets/practices/g7.jpg";

const cards = [
  {
    id: 1,
    img: g1,
    title: "Flexibilidad de Horarios",
    subtitle:
      "Aprende a tu propio ritmo con nuestros cursos virtuales. Accede al contenido en cualquier momento y desde cualquier lugar.",
  },
  {
    id: 2,
    img: g2,
    title: "Variedad de Contenido Especializado",
    subtitle:
      "Descubre una amplia gama de cursos especializados en áreas clave de la Medicina Veterinaria. ",
  },
  {
    id: 3,
    img: g3,
    title: "Expertos de la Industria como Instructores",
    subtitle:
      "Aprende de los mejores en el campo veterinario. Nuestros cursos están dirigidos por expertos con una vasta experiencia en la industria.",
  },
  {
    id: 4,
    img: g4,
    title: "Interactividad y Participación Activa",
    subtitle:
      "Sumérgete en experiencias de aprendizaje interactivas que fomentan la participación activa y el compromiso. 	",
  },
  {
    id: 5,
    img: g5,
    title: "Apoyo Continuo del Equipo de Vet Academy",
    subtitle:
      "No estás solo en tu viaje de aprendizaje. Nuestro equipo de soporte está siempre disponible para asegurarse de que tengas una experiencia educativa exitosa y enriquecedora.",
  },
  {
    id: 6,
    img: g6,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
  {
    id: 6,
    img: g7,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
];

const Advantages = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-28 `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="grid  sm:grid-cols-2 grid-cols-1  w-full gap-20 ">
      {cards.map(({ id, img, title, subtitle }) => (
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          key={id}
          className={`flex items-start justify-center gap-20 `}
        >
          <motion.img
            variants={zoomIn(0.5, 2)}
            src={img}
            className={`rounded-2xl shadow-lg   ${
              darkMode ? " shadow-white" : "shadow-black"
            }`}
            alt=""
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Advantages;
