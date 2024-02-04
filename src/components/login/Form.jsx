import styles, { layout } from "@/style";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn, fadeIn } from "@/utils/motion";

const Form = ({ darkMode }) => {
  return (
    <motion.form variants={zoomIn(0.5, 0.8)} className=" w-[600px] mx-auto  ">
      <h2
        className={`${styles.heading2} mb-2  flex items-center justify-center`}
      >
        Aula Virtual
      </h2>
      <div
        className={`flex   ${
          darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
        } rounded-[20px]  flex-col md:p-10 p-6  w-full `}
      >
        {/*   <h2 className={`${styles.headingForm}`}>Inicia sesion en tu cuenta</h2> */}
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
          <div className="flex flex-col w-full">
            <label
              className={` flex items-center justify-start mb-1  ${styles.title} `}
            >
              Tu correo electronico
            </label>
            <div className="flex items-center justify-center gap-2 mt-2">
              <input
                type="text"
                placeholder="correo@correo.com"
                required
                name="Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode ? " " : " border-black  "
                }   input-primary  border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 `}
              />
              <FaRegUser
                className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4 mt-8">
          <div className="flex flex-col w-full">
            <label
              className={` flex items-center justify-start mb-1  ${styles.title} `}
            >
              Contraseña
            </label>
            <div className="flex items-center justify-center gap-2 mt-2">
              <input
                type="password"
                placeholder="••••••••"
                required
                name="Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode ? " " : " border-black  "
                }  input-primary  border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 `}
              />
              <RiLockPasswordLine
                className={`text-3xl ${darkMode ? "text-white" : "text-black"}`}
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-end my-8 ">
          <span className="link link-primary">Cambiar Contraseña</span>
        </div>
        <button className={`${styles.button} flex items-center justify-center`}>
          Iniciar Sesión
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
