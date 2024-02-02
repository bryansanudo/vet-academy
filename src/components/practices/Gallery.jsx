import styles from "@/style";

import { GrStatusGood } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdDashboardCustomize } from "react-icons/md";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { FaBars, FaTimes } from "react-icons/fa";

import g1 from "@/assets/practices/g1.jpg";
import g2 from "@/assets/practices/g2.jpg";
import g3 from "@/assets/practices/g3.jpg";
import g4 from "@/assets/practices/g4.jpg";
import g5 from "@/assets/practices/g5.jpg";
import g6 from "@/assets/practices/g6.jpg";
import g7 from "@/assets/practices/g7.jpg";
import { useState } from "react";

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

const Gallery = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-28 `}
    >
      <div
        className={` red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
      />
      <h2 className={`${styles.heading2} mb-10`}>
        Cursos presenciales - Prácticas
      </h2>
      <motion.div
        variants={fadeIn("down", "spring", 0.3, 2.5)}
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        <div className="grid gap-5 ">
          <div
            onClick={() =>
              openModal(
                "https://i.ibb.co/M1cJkyt/Foto-2024-02-02-09-25-09-a-m.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/M1cJkyt/Foto-2024-02-02-09-25-09-a-m.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() => openModal("https://i.ibb.co/YjCrL0Q/IMG-1115.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/YjCrL0Q/IMG-1115.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() => openModal("https://i.ibb.co/0rZzs2y/IMG-1240.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/0rZzs2y/IMG-1240.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid ">
          <div
            onClick={() =>
              openModal("https://i.ibb.co/3kh3ph3/IMG-1338-jpg-1.jpg")
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/3kh3ph3/IMG-1338-jpg-1.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() => openModal("https://i.ibb.co/nBg09yW/IMG-1422.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/nBg09yW/IMG-1422.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal("https://i.ibb.co/Wc3b1VL/IMG-1338-jpg.jpg")
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/Wc3b1VL/IMG-1338-jpg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-5">
          <div
            onClick={() => openModal("https://i.ibb.co/zbv0WPw/IMG-5083.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/zbv0WPw/IMG-5083.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() => openModal("https://i.ibb.co/9Gr3ssy/IMG-8035.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/9Gr3ssy/IMG-8035.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() => openModal("https://i.ibb.co/72rn3Vh/IMG-8036.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/72rn3Vh/IMG-8036.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-5">
          <div
            onClick={() =>
              openModal("https://i.ibb.co/Xb80SS3/IMG-8069-jpg.jpg")
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/Xb80SS3/IMG-8069-jpg.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://i.ibb.co/M1cJkyt/Foto-2024-02-02-09-25-09-a-m.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/M1cJkyt/Foto-2024-02-02-09-25-09-a-m.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal("https://i.ibb.co/m6CztFj/IMG-1056-jpg.jpg")
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/m6CztFj/IMG-1056-jpg.jpg"
              alt=""
            />
          </div>
        </div>
      </motion.div>
      {selectedImage && (
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <motion.div
            variants={fadeIn("up", "spring", 0.1, 2.5)}
            className="relative mx-4"
          >
            <img
              src={selectedImage}
              alt=""
              className="w-[100%] max-h-[80vh] rounded-2xl"
            />
            <button
              className="btn btn-sm btn-circle btn-primary z-50 absolute top-6 right-6 -mt-4 -mr-4"
              onClick={closeModal}
            >
              <FaTimes className="text-xl" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Gallery;
