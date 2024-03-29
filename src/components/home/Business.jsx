import styles, { layout } from "@/style";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { GrCertificate } from "react-icons/gr";
import { FaRegHandPointer } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const features = [
  {
    id: "feature-1",
    motionTime: 1,
    icon: <FaRegHandPointer />,
    title: "Aprendizaje Interactivo",
    content:
      "Sumérgete en una experiencia de aprendizaje virtual envolvente con nuestros cursos. Accede al contenido desde cualquier lugar y en cualquier momento, adaptado a tu ritmo y necesidades.",
  },
  {
    id: "feature-2",
    motionTime: 2,
    icon: <HiOutlineComputerDesktop />,
    title: "Plataforma Intuitiva y Accesible",
    content:
      "Nuestra plataforma está diseñada pensando en ti, ofreciendo una navegación fácil e intuitiva. Aprende de manera efectiva y cómoda con recursos didácticos de calidad y soporte técnico dedicado.",
  },
  {
    id: "feature-3",
    motionTime: 3,
    icon: <GrCertificate />,
    title: "Certificado de Asistencia",
    content:
      "Aprovecha al máximo tu inversión en educación con nuestros cursos, respaldados por certificaciones. Obtén reconocimiento por tu dedicación y esfuerzo en la mejora continua de tus habilidades veterinarias.",
  },
];

const FeatureCard = ({ icon, title, content, index, darkMode, motionTime }) => (
  <motion.div
    variants={fadeIn("up", "spring", motionTime * 0.5, 0.5)}
    className={`flex items-center md:flex-row flex-col gap-2 md:gap-0 p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } ${
      darkMode
        ? "shadow-sm shadow-white feedback-card  "
        : "shadow-md shadow-black hover:scale-105 duration-500"
    } `}
  >
    <div
      className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-primary `}
    >
      <span className="text-white text-3xl">{icon}</span>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className={`${styles.title} mb-1`}>{title}</h4>
      <p className={`${styles.subtitle}`}>{content}</p>
    </div>
  </motion.div>
);

const Business = ({ darkMode }) => (
  <section id="features" className={`${layout.section}  `}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Descubre Tu Próximo Paso</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Conoce nuestras ventajas y descubre por qué somos la opción preferida
        para profesionales veterinarios en busca de formación de calidad y
        relevante.
      </p>

      <Link to="/courses">
        <button className={`${styles.button} bg-primary mt-6`}>
          ¡Todos Los Cursos!
        </button>
      </Link>
    </div>

    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
          darkMode={darkMode}
        />
      ))}
    </motion.div>
  </section>
);

export default Business;
