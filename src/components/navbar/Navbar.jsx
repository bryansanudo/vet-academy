import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/style";

import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { GoDot } from "react-icons/go";

import { Link, NavLink } from "react-router-dom";

import logoVet from "@/assets/vet-academy-logo.jpg";

import { IoMdArrowDropdown } from "react-icons/io";

import NavbarTop from "@/components/navbar/NavbarTop";

const Navbar = ({ darkMode, setDarkMode }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
      : "";
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      name: "Nosotros",
      link: "/about",
    },
    {
      id: 2,
      name: "Bovinos",
      link: "/bovinos",
    },
    {
      id: 3,
      name: "Cursos",
      link: "/courses",
    },
    {
      id: 4,
      name: "Masterclass Gratuistas",
      link: "/masterclass",
    },
    {
      id: 5,
      name: "Contacto",
      link: "/contact",
    },
  ];
  return (
    <>
      <NavbarTop />
      <div
        className={` ${styles.paddingX} ${
          styles.flexCenter
        } fixed mt-10  w-full z-50 ${
          darkMode ? "bg-[#0D0E1C]" : "bg-white "
        }    `}
      >
        <div className={`${styles.boxWidth} `}>
          <div className="w-full h-20 dark:text-white ">
            <div className="flex justify-start   md:justify-end md:gap-5 items-center  mx-auto  h-full">
              <div className="mr-auto  md:flex items-end">
                <div className="flex gap-1 items-end">
                  <NavLink to="/" className={activeLink}>
                    <img
                      src={darkMode ? logoVet : logoVet}
                      className="w-48  object-contain hover:scale-105 duration-500"
                      alt=""
                    />
                  </NavLink>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                <ul className="flex gap-6 ">
                  {links.map(({ id, name, link }) => (
                    <li
                      key={id}
                      className={`mt-1 text-[18px] hover:font-semibold hover:text-primary capitalize duration-300 cursor-pointer `}
                    >
                      <NavLink to={link} className={activeLink}>
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onClick={() => setIsMenuShown(!isMenuShown)}
                className="block lg:hidden cursor-pointer mr-4"
              >
                {isMenuShown ? (
                  <FaTimes className="hover:text-primary" size={30} />
                ) : (
                  <FaBars className="hover:text-primary" size={30} />
                )}
              </div>

              <div className="flex items-center flex-row justify-center gap-2 ">
                <div className="bg-gray-300 h-7 mr-2 w-[1px] hidden md:flex"></div>
                <div onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? (
                    <MdWbSunny
                      className={`mt-1 text-2xl hover:text-primary  cursor-pointer duration-300  `}
                    />
                  ) : (
                    <MdNightsStay
                      className={`mt-1 text-2xl hover:text-primary   cursor-pointer duration-300  `}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute w-full  z-[50] left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
              isMenuShown ? "top-20 rounded-b-2xl  opacity-100" : "top-[-600px]"
            } ${darkMode ? "bg-[#0D0E1C]" : "bg-gray-100"}`}
          >
            <ul
              className={`flex flex-col gap-6 text-left dark:text-white ${
                darkMode ? " " : ""
              }`}
            >
              {links.map(({ id, name, link }) => (
                <li
                  key={id}
                  onClick={() => setIsMenuShown(!isMenuShown)}
                  className={`mt-1 text-[18px] hover:font-semibold hover:text-primary capitalize duration-300 cursor-pointer `}
                >
                  <NavLink to={link} className={activeLink}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
