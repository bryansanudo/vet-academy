import styles from "@/style";

import about from "@/assets/about-us.png";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}  h-screen md:mt-0 mt-24 `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 2.5)}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] dark:text-white ss:leading-[100.8px] leading-[75px]">
            Vet Academy
            <br className="sm:block hidden" />{" "}
            <span className={`text-primary `}>
              Somos Compañeros en tu Trayectoria Veterinaria
            </span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("left", "spring", 0.3, 2.5)}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={about}
          alt="billing"
          className="lg:w-[800px] h-[100%] w-[400px]  object-contain relative z-[5]"
        />

        {/* gradient start */}
        <div
          className={` red__gradient absolute z-[0] w-[40%] h-[35%] top-0`}
        />
        <div
          className={` white__gradient  
           absolute z-[1] w-[80%] h-[80%] rounded-full  bottom-40`}
        />
        <div
          className={` red__gradient absolute z-[0] w-[50%] h-[50%] right-20 bottom-20`}
        />

        {/* gradient end */}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
