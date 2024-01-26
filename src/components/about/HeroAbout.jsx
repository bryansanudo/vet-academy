import styles from "@/style";

import test from "@/assets/test.png";
import heroHome from "@/assets/hero-home.png";
import about from "@/assets/about-us.png";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const Hero = ({ darkMode }) => {
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
        {/*  <div
          className={`flex flex-row items-center py-[6px] px-4  ${
            darkMode ? "bg-black-gradient-2" : "bg-black-gradient"
          } rounded-[10px] mb-2`}
        >
          <FaStar className={` text-primary `} />
          <p className={`font-normal  text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white ">
              Immigration Law Services in the US
            </span>
          </p>
        </div> */}

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

        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Navigating the Pathways to Success in the United States.
        </p> */}
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

      {/*   <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </motion.section>
  );
};

export default Hero;
