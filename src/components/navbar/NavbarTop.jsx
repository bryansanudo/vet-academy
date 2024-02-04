import styles from "@/style";
import { Link, NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { FaRegUser } from "react-icons/fa";

const NavbarTop = () => {
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
  return (
    <div
      className={`bg-primary fixed w-full flex items-center justify-center h-10 z-50 ${styles.paddingX}`}
    >
      <div className={`${styles.boxWidth} `}>
        <div className={`flex  items-center  justify-between w-full`}>
          {/* socials */}
          <div className="hidden sm:flex">
            <div className="flex items-center justify-center gap-6  ">
              {socials.map(({ id, logo, link }) => (
                <a key={id} href={link} target="_blank">
                  <div
                    className={` h-[30px] w-[30px]  rounded-lg ${styles.flexCenter} hover:scale-105 group  duration-300 cursor-pointer bg-primary`}
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
          <NavLink to="/login" className={activeLink}>
            <div
              className={`flex items-center justify-center text-white gap-2 cursor-pointer hover:scale-105 duration-500  `}
            >
              <FaRegUser className="text-xl" />
              <div>Iniciar Sesión</div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;