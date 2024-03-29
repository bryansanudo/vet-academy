import styles from "@/style";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaPhotoVideo } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { FaUserDoctor } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { FaRegUser } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import { toast } from "react-toastify";
import { ShowOnLogin, ShowOnLogout } from "@/components/HiddenLink";
import { signOut } from "firebase/auth";
import { auth } from "@/configFirebase";

const NavbarTop = ({ displayName }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-white"
      : "";
  const socials = [
    /* {
          id: 3,
          logo: <FaWhatsapp />,
          link: "https://api.whatsapp.com/send?phone=573243291412",
        }, */
    /* {
          id: 5,
          logo: <FaTiktok />,
          link: "https://www.tiktok.com/@eb3wfs",
        }, */
    {
      id: 6,
      logo: <FaYoutube />,
      link: "https://www.youtube.com/@vet.academy",
    },
    {
      id: 2,
      logo: <FaInstagram />,
      link: "https://www.instagram.com/vet.academyedu",
    },
    {
      id: 1,
      logo: <FaFacebookF />,
      link: "https://www.facebook.com/vet.academyedu/",
    },
    {
      id: 4,
      logo: <IoIosMail />,
      link: "mailto:vet.academyeducacion@gmail.com",
    },
  ];

  const redirect = useNavigate();
  const logout = () => {
    redirect("/");
    signOut(auth)
      .then(() => {
        toast.success("Cierre de sesión exitoso.");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <>
      <div
        className={`bg-[#005F99] fixed w-full flex items-center justify-center  h-12 z-50 ${styles.paddingX}`}
      >
        <div className={`${styles.boxWidth} `}>
          <div
            className={`flex  items-center  sm:justify-between justify-end w-full`}
          >
            {/* socials */}
            <div className="hidden sm:flex">
              <div className="flex items-center justify-center gap-6  ">
                {socials.map(({ id, logo, link }) => (
                  <a key={id} href={link} target="_blank">
                    <div
                      className={` h-[30px] w-[30px]  rounded-lg ${styles.flexCenter} hover:scale-105 group  duration-300 cursor-pointer `}
                    >
                      <span className="group-hover: duration-300 text-white text-lg md:text-2xl">
                        {logo}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/*  login */}
            <div className="flex items-center justify-center gap-2">
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  <div
                    className={`flex items-center justify-center text-white gap-2 cursor-pointer hover:scale-105 duration-500  `}
                  >
                    <div>Iniciar Sesión</div>
                  </div>
                </NavLink>
                <div className="bg-white w-[1px] h-6"></div>
              </ShowOnLogout>

              <ShowOnLogout>
                <NavLink to="/register" className={activeLink}>
                  <div
                    className={`flex items-center justify-center text-white gap-2 cursor-pointer hover:scale-105 duration-500  `}
                  >
                    <div>Regístrate</div>
                  </div>
                </NavLink>
              </ShowOnLogout>
            </div>
            {/*  logout */}
            <ShowOnLogin>
              <div className="flex items-center justify-center gap-4">
                <NavLink to="/study-plan" className={activeLink}>
                  <div
                    className={`flex items-center justify-center text-white  cursor-pointer hover:scale-105 duration-500  `}
                  >
                    <div className="flex items-center justify-center gap-2  rounded-lg">
                      <FaUserDoctor className="text-xl " />
                      <div>Plan de Estudios</div>
                    </div>
                  </div>
                </NavLink>
                {/* cursos */}
                <div
                  onClick={logout}
                  className={`flex items-center justify-center text-white gap-2 cursor-pointer hover:scale-105 duration-500  `}
                >
                  <div className="flex items-center justify-center gap-2 border-2 py-[2px] px-2 rounded-lg">
                    <GrPowerShutdown className="text-xl " />
                    <div>Salir</div>
                  </div>
                </div>
              </div>
            </ShowOnLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
