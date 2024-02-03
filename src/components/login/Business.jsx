import styles, { layout } from "@/style";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { GrCertificate } from "react-icons/gr";
import { FaRegHandPointer } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

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
      <div className="w-full  ">
        <form className=" w-full">
          <div
            className={`flex   ${
              darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
            } rounded-[20px]  flex-col md:gap-8 gap-4 md:p-10 p-6  w-full h-full mb-4 `}
          >
            <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
              <div className="flex flex-col w-full">
                <label
                  className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                >
                  Nombre
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
              <div className="flex flex-col w-full">
                <label
                  className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                >
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  name="Last Name"
                  autoComplete="off"
                  className={` h-10 rounded-[10px] ${
                    darkMode ? " " : " border-black  "
                  }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
              <div className="flex flex-col w-full">
                <label
                  className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                >
                  Email
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
              <div className="flex flex-col w-full">
                <label
                  className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
                >
                  Telefono
                </label>
                <input
                  type="text"
                  required
                  name="Last Name"
                  autoComplete="off"
                  className={` h-10 rounded-[10px] ${
                    darkMode ? " " : " border-black  "
                  }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label
                className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Mensaje
              </label>
              <textarea
                name="Questions"
                rows="3"
                required
                autoComplete="off"
                className={`  rounded-[10px] ${
                  darkMode ? " " : " border-black  "
                }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 py-2 mt-2`}
              />
            </div>

            <button
              className={`btn  font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 btn-primary  `}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
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
