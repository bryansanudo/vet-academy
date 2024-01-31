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
