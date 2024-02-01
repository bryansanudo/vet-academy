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

      <motion.div
        variants={fadeIn("down", "spring", 0.3, 2.5)}
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        <div className="grid gap-5 ">
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-5">
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-5">
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-5">
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div
            onClick={() =>
              openModal(
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              )
            }
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-md shadow-gray-400"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
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
