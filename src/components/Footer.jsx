import React from "react";

import styles from "@/style";
import { Link } from "react-router-dom";

import logoVet from "@/assets/vet-academy-logo.jpg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { FaUserDoctor } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = ({ darkMode }) => {
  const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
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
    <>
      <footer className="flex flex-col md:flex-row   border-t pt-6   ">
        <div className="flex flex-col mb-10   md:mr-40 ">
          <img
            src={darkMode ? logoVet : logoVet}
            className="w-48 object-contain"
            alt=""
          />

          <div className="flex items-center justify-between w-48  mt-2  gap-1  ">
            {socials.map(({ id, logo, link }) => (
              <a key={id} href={link} target="_blank">
                <div
                  className={` h-[30px] w-[30px]  md:w-[40px] md:h-[40px] rounded-lg ${styles.flexCenter} hover:scale-105 group  duration-300 cursor-pointer bg-primary`}
                >
                  {/*                 <FaLinkedinIn className="dark:text-white text-2xl" /> */}
                  <span className="group-hover: duration-300 text-white text-lg md:text-2xl">
                    {logo}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6  w-full">
          {/*  Institucion */}
          <nav>
            <header className={`${styles.title} mb-2`}>Institución</header>
            <div
              className={`${styles.subtitle} hover:font-medium cursor-pointer`}
            >
              <NavLink to="/about">
                <div>Nosotros</div>
              </NavLink>
            </div>

            <div
              className={`${styles.subtitle} hover:font-medium cursor-pointer`}
            >
              <NavLink to="faq">
                <div>Preguntas Frecuentes</div>
              </NavLink>
            </div>
            <div
              className={`${styles.subtitle} hover:font-medium cursor-pointer`}
            >
              <div>Proximos Lanzamientos</div>
            </div>
            <div
              className={`${styles.subtitle} hover:font-medium cursor-pointer`}
            >
              <NavLink to="/contact">
                <div>Contacto</div>
              </NavLink>
            </div>
          </nav>
          {/* ayuda y soporte */}
          <nav>
            <header className={`${styles.title} mb-2`}>Ayuda y soporte</header>
            <div to="/terms">
              <p
                className={`${styles.subtitle} hover:font-medium cursor-pointer`}
              >
                Whatshapp
              </p>
            </div>
            <div to="/privacy">
              <p
                className={`${styles.subtitle} hover:font-medium cursor-pointer`}
              >
                Correo Electronico
              </p>
            </div>
          </nav>
          <nav>
            <header className={`${styles.title} mb-2`}>Legal</header>
            <div to="/terms">
              <p
                className={`${styles.subtitle} hover:font-medium cursor-pointer`}
              >
                Políticas de privacidad
              </p>
            </div>
            <div to="/privacy">
              <p
                className={`${styles.subtitle} hover:font-medium cursor-pointer`}
              >
                Políticas devoluciones y reembolsos
              </p>
            </div>
          </nav>
        </div>
      </footer>
      <div className=" flex   mt-4 mb-20 md:mb-6">
        <h2 className={`${styles.title}`}>
          Copyright © 2024 • vetacademy.com.co •
        </h2>
      </div>
    </>
  );
};

export default Footer;
