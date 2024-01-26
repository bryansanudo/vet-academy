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

import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = ({ darkMode }) => {
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
  ];
  return (
    <footer className="footer  border-t p-6  mb-10 ">
      <div name="scrol " className="pt-20" />

      <div className="">
        <div className="flex gap-1 items-start   ">
          <img
            src={darkMode ? logoVet : logoVet}
            className="w-48 object-contain"
            alt=""
          />
          {/*  <p
            className={` ${
              darkMode ? "text-white" : "text-black"
            } text-[30px] tangerine mb-2 py-1      `}
          >
            Visa Law
          </p> */}
        </div>
        <div className="flex items-center justify-between w-full mt-2  gap-1  ">
          {socials.map(({ id, logo, link }) => (
            <a key={id} href={link} target="_blank">
              <div
                className={` h-[30px] w-[30px]  md:w-[50px] md:h-[50px] rounded-lg ${styles.flexCenter} hover:scale-105 group  duration-300 cursor-pointer bg-primary`}
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

      <nav>
        <header className={`${styles.title}`}>Acerca De</header>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div>Eventos</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div>Proximos Cursos</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div>Preguntas Frecuentes</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div>Contacto</div>
        </div>
      </nav>
      <nav>
        <header className={`${styles.title}`}>Cursos</header>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div to="/eb1a">Curso 1</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div to="/eb2">Curso 2</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div to="/eb3a">Curso 3</div>
        </div>
        <div className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          <div to="/eb5">Curso 4</div>
        </div>
      </nav>
      <nav>
        <header className={`${styles.title}`}>Legal</header>
        <div to="/terms">
          <p className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
            Terms of use
          </p>
        </div>
        <div to="/privacy">
          <p className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
            Privacy policy
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
