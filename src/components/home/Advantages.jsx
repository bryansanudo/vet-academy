import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const cards = [
  {
    id: 1,
    img: <GrStatusGood />,
    title: "Flexibilidad de Horarios",
    subtitle:
      "Aprende a tu propio ritmo con nuestros cursos virtuales. Accede al contenido en cualquier momento y desde cualquier lugar.",
  },
  {
    id: 2,
    img: <VscServerProcess />,
    title: "Variedad de Contenido Especializado",
    subtitle:
      "Descubre una amplia gama de cursos especializados en áreas clave de la Medicina Veterinaria. ",
  },
  {
    id: 3,
    img: <MdDashboardCustomize />,
    title: "Expertos de la Industria como Instructores",
    subtitle:
      "Aprende de los mejores en el campo veterinario. Nuestros cursos están dirigidos por expertos con una vasta experiencia en la industria.",
  },
  {
    id: 4,
    img: <HiOutlineDocumentMagnifyingGlass />,
    title: "Interactividad y Participación Activa",
    subtitle:
      "Sumérgete en experiencias de aprendizaje interactivas que fomentan la participación activa y el compromiso. 	",
  },
  {
    id: 5,
    img: <GrCycle />,
    title: "Apoyo Continuo del Equipo de Vet Academy",
    subtitle:
      "No estás solo en tu viaje de aprendizaje. Nuestro equipo de soporte está siempre disponible para asegurarse de que tengas una experiencia educativa exitosa y enriquecedora.",
  },
  {
    id: 6,
    img: <MdMoreTime />,
    title: "Acceso a una Comunidad Profesional Global",
    subtitle:
      "Únete a una red de profesionales veterinarios de todo el mundo. Con nuestros cursos, obtienes acceso a una comunidad activa y colaborativa.",
  },
];

const Advantages = ({ darkMode }) => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div
      className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
    />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Ventajas</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <motion.div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-6 ">
        {cards.map(({ id, img, title, subtitle }) => (
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 2)}
            key={id}
            className={`flex flex-col  items-start justify-center md:gap-6 ${
              darkMode
                ? "shadow-sm shadow-white feedback-card "
                : "shadow-md shadow-black  duration-500"
            }
rounded-[20px]  p-8 `}
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary `}
            >
              <div className="text-white text-3xl">{img}</div>
            </div>

            <div className=" p-6 sm:px-3 sm:py-0">
              <p className={`${styles.title} mb-1`}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Advantages;
