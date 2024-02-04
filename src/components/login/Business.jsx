import styles, { layout } from "@/style";

import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import { FaRegHandPointer } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import LoginForm from "./LoginForm";

export const features = [
  {
    id: "feature-1",
    motionTime: 1,
    icon: <FaRegHandPointer />,
    title: "(Información Relevante)",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia maiores, cupiditate odio tempore rerum sapiente quibusdam,",
  },

  {
    id: "feature-2",
    motionTime: 2,
    icon: <HiOutlineComputerDesktop />,
    title: "(Información Relevante)",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia maiores, cupiditate odio tempore rerum sapiente quibusdam,",
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
      {/*  <div className="w-full  ">
        <form className=" w-full">
          <div
            className={`flex   ${
              darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
            } rounded-[20px]  flex-col md:p-10 p-6  w-full h-full mb-4 `}
          >
            <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
              <div className="flex flex-col w-full">
                <label
                  className={` flex items-center justify-center  ${styles.title} `}
                >
                  Correo Electronico
                </label>
                <input
                  type="text"
                  required
                  name="Name"
                  autoComplete="off"
                  className={` h-10 rounded-[10px] ${
                    darkMode ? " " : " border-black  "
                  }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  justify-center gap-4 mt-8">
              <div className="flex flex-col w-full">
                <label
                  className={` flex items-center justify-center  ${styles.title} `}
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  name="Name"
                  autoComplete="off"
                  className={` h-10 rounded-[10px] ${
                    darkMode ? " " : " border-black  "
                  }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                />
              </div>
            </div>
            <div className=" flex items-center justify-end mt-8 mb-2">
              <span className="text-primary hover:scale-105 duration-500 cursor-pointer">
                Cambiar Contraseña
              </span>
            </div>
            <button
              className={`btn font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 btn-primary `}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div> */}
      <LoginForm />
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
