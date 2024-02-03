import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

const images = [
  "https://i.ibb.co/M1cJkyt/Foto-2024-02-02-09-25-09-a-m.jpg",
  "https://i.ibb.co/zbv0WPw/IMG-5083.jpg",
  "https://i.ibb.co/LY26469/about-us-2.jpg",
];

function preloadImages(urls) {
  urls.forEach((url) => {
    new Image().src = url;
  });
}
const HeroHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: "background-image 1.5s linear",
  };
  return (
    <>
      <div className="hero min-h-[100vh]" style={currentImageStyle}>
        <div className="hero-overlay bg-black opacity-30" />
        <div className="hero-content text-center text-white">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-5xl"
          >
            <motion.h1
              variants={zoomIn(0, 2)}
              className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider"
            >
              "¡Explora el mundo del conocimiento veterinario con un solo clic!
              Explora nuestros cursos."
            </motion.h1>
          </motion.div>
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor-pointer">
            <Link to="scrol" smooth duration={50} className="hidden sm:flex">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 mb-56">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-white mb-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
