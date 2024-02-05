import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const GalleryAbout = () => {
  const imgs = [
    {
      id: 1,
      img: doc1,
    },
    {
      id: 2,
      img: doc2,
    },
    {
      id: 3,
      img: doc3,
    },
    {
      id: 4,
      img: doc4,
    },
    {
      id: 5,
      img: doc5,
    },
    {
      id: 6,
      img: doc6,
    },
    {
      id: 7,
      img: doc7,
    },
    {
      id: 8,
      img: doc8,
    },
    {
      id: 9,
      img: doc9,
    },
  ];
  return (
    <motion.article
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h1>Curso de CSS Animaciones</h1>
      <section className="grid md:grid-cols-4  gap-4">
        <motion.div variants={fadeIn("right", "spring", 0.1, 1)}>
          <img src={doc1} alt="" />
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 1.1, 1)}>
          <img src={doc2} alt="" />
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 2.1, 1)}>
          <img src={doc2} alt="" />
        </motion.div>
        <img src={doc2} alt="" />
        <img src={doc3} alt="" />
        <img src={doc4} alt="" />
        <img src={doc5} alt="" />
        <img src={doc6} alt="" />
        <img src={doc7} alt="" />
        <img src={doc8} alt="" />
        <img src={doc9} alt="" />
      </section>
    </motion.article>
  );
};

export default GalleryAbout;

/* import styles from "@/style";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";

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
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative  `}
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
     
        <div className="grid gap-5 ">
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
            onClick={() => openModal("https://i.ibb.co/LY26469/about-us-2.jpg")}
          >
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105 duration-500 shadow-lg shadow-gray-400"
              src="https://i.ibb.co/LY26469/about-us-2.jpg"
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

export default Gallery; */
