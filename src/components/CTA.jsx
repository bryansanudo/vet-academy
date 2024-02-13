import styles from "../style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const CTA = ({ darkMode }) => (
  <motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <motion.section
      variants={fadeIn("right", "spring", 0.3, 2.5)}
      className={`${styles.flexCenter} ${styles.marginY}  ${
        styles.padding
      } sm:flex-row flex-col ${
        darkMode ? " bg-black-gradient-2 " : "shadow-md shadow-black "
      } rounded-[20px] `}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} dark:text-white`}>
          ¡Impulsa tu carrera veterinaria hoy!
        </h2>
        <p
          className={`${styles.paragraph} dark:text-dimWhite max-w-[470px] mt-5`}
        >
          Explora nuestra amplia gama de cursos especializados en veterinaria y
          descubre por qué somos la elección preferida de profesionales. Con
          contenido de alta calidad, instructores expertos y una experiencia de
          aprendizaje flexible.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <a
          href="https://api.whatsapp.com/send?phone=573243291412"
          className=""
          target="_blank"
        >
          <button className={`${styles.button} bg-primary `}>
            ¡Quiero saber más!
          </button>
        </a>
      </div>
    </motion.section>
  </motion.div>
);

export default CTA;
