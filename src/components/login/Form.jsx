import styles from "@/style";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";

import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "@/components/Loader";

const Form = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const redirect = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Inicio de sesion exitoso ");
        redirect("/study-plan");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <motion.div variants={zoomIn(0.1, 0.8)} className=" w-[600px] mx-auto  ">
        <h2
          className={`${styles.heading2} mb-2  flex items-center justify-center`}
        >
          Aula Virtual
        </h2>
        <form
          onSubmit={loginUser}
          className={`flex   ${
            darkMode ? "shadow-sm shadow-white  " : "shadow-md shadow-black"
          } rounded-[20px]  flex-col md:p-10 p-6  w-full `}
        >
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <div className="flex flex-col w-full">
              <label
                className={` flex items-center justify-start mb-1  ${styles.title} `}
              >
                Tu correo electronico
              </label>
              <div className="flex items-center justify-center gap-2 mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
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
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-black"
                  }`}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  className={`text-xl ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-end my-8 ">
            <span className="link link-primary">Cambiar Contraseña</span>
          </div>
          <button
            className={`${styles.button} flex items-center justify-center`}
          >
            Iniciar Sesión
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Form;
