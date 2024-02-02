import styles, { layout } from "@/style";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export const features = [
  {
    id: "feature-1",
    motionTime: 1,
    icon: <HiUserGroup />,
    title: "Aprendizaje Interactivo",
    content:
      "Sumérgete en una experiencia de aprendizaje virtual envolvente con nuestros cursos. Accede al contenido desde cualquier lugar y en cualquier momento, adaptado a tu ritmo y necesidades.",
  },
  {
    id: "feature-2",
    motionTime: 2,
    icon: <MdOutlineSecurity />,
    title: "Plataforma Intuitiva y Accesible",
    content:
      "Nuestra plataforma está diseñada pensando en ti, ofreciendo una navegación fácil e intuitiva. Aprende de manera efectiva y cómoda con recursos didácticos de calidad y soporte técnico dedicado.",
  },
  {
    id: "feature-3",
    motionTime: 3,
    icon: <BiTransfer />,
    title: "Certificado de Asistencia",
    content:
      "Aprovecha al máximo tu inversión en educación con nuestros cursos, respaldados por certificaciones. Obtén reconocimiento por tu dedicación y esfuerzo en la mejora continua de tus habilidades veterinarias.",
  },
];

const Business = ({ darkMode }) => (
  <>
    <section id="features" className={`${layout.section}  `}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Descubre Tu Próximo Paso</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Conoce nuestras ventajas y descubre por qué somos la opción preferida
          para profesionales veterinarios en busca de formación de calidad y
          relevante.
        </p>

        <Link to="/courses">
          <button className={`${styles.button} bg-primary `}>
            ¡Todos Los Cursos!
          </button>
        </Link>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${layout.sectionImg} flex-col `}
      >
        <div className="w-[200px] h-[200px] bg-red-500"></div>
      </motion.div>
    </section>
  </>
);

export default Business;