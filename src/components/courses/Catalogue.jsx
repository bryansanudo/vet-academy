import styles from "@/style";

import { Link } from "react-router-dom";

import logo from "@/assets/vet-academy-logo.jpg";

import { useEffect, useState } from "react";

import colImg from "@/assets/col.png";
import enImg from "@/assets/en.png";

import Price from "@/components/courses/Price";

import curso1 from "@/assets/courses/curso-1.png";
import curso2 from "@/assets/courses/curso-2.png";
import curso3 from "@/assets/courses/curso-3.png";
import curso4 from "@/assets/courses/curso-4.png";
import curso5 from "@/assets/courses/curso-5.png";
import curso6 from "@/assets/courses/curso-6.png";
import curso7 from "@/assets/courses/curso-7.png";
import curso8 from "@/assets/courses/curso-8.png";
import curso9 from "@/assets/courses/curso-9.png";
import curso10 from "@/assets/courses/curso-10.png";
import curso11 from "@/assets/courses/curso-11.png";
import curso12 from "@/assets/courses/curso-12.png";
import curso13 from "@/assets/courses/curso-13.png";

const Catalogue = ({ darkMode }) => {
  const [language, setLanguage] = useState("en");
  const coursesLink = [
    {
      id: 6,
      img: curso6,
      logo: logo,
      title: "Bovinos",
      subtitle: "Descripcion del curso 12",
      link: "/bovinos",
      cop: "1.000.000",
      usd: "300",
      sessions: "32",
    },
    {
      id: 13,
      img: curso13,
      logo: logo,
      title: "Manejo del dolor en Caninos y Felinos",
      subtitle: "Descripcion del curso 12",
      link: "/manejo-del-dolor",
      cop: "300.000",
      usd: "80",
      sessions: "7",
    },
    {
      id: 1,
      img: curso1,
      logo: logo,
      title: "Etología en la clínica diaria",
      subtitle: "Descripcion de Etología en la clínica diaria",
      link: "/etologia",
      cop: "250.000",
      usd: "70",
      sessions: "10",
    },
    {
      id: 2,
      img: curso2,
      logo: logo,
      title: "Oftalmología",
      subtitle: "Descripcion del curso 2",
      link: "/oftalmologia",
      cop: "600.000",
      usd: "150",
      sessions: "6",
    },
    {
      id: 3,
      img: curso3,
      logo: logo,
      title: "Endocrinología",
      subtitle: "Descripcion del curso 3",
      link: "/endocrinologia",
      cop: "600.000",
      usd: "150",
      sessions: "7",
    },
    {
      id: 4,
      img: curso4,
      logo: logo,
      title: "Oncología",
      subtitle: "Descripcion del curso 4",
      link: "/oncologia",
      cop: "500.000",
      usd: "100",
      sessions: "6",
    },
    {
      id: 5,
      img: curso5,
      logo: logo,
      title: "Hospitalización",
      subtitle: "Descripcion del curso 5",
      link: "/hospitalizacion",
      cop: "700.000",
      usd: "180",
      sessions: "13",
    },
    {
      id: 7,
      img: curso7,
      logo: logo,
      title: "Enfermedades Infecciosas",
      subtitle: "Descripcion del curso 7",
      link: "/enfermedades",
      cop: "700.000",
      usd: "180",
      sessions: "14",
    },
    {
      id: 8,
      img: curso8,
      logo: logo,
      title: "Emergencias Veterinarias",
      subtitle: "Descripcion del curso 8",
      link: "/emergencias",
      cop: "700.000",
      usd: "180",
      sessions: "20",
    },
    {
      id: 9,
      img: curso9,
      logo: logo,
      title: "Enfermería",
      subtitle: "Descripcion del curso 9",
      link: "/enfermeria",
      cop: "350.000",
      usd: "90",
      sessions: "18",
    },
  ];
  const coursesAnchor = [
    {
      id: 11,
      img: curso11,
      logo: logo,
      title: "Paciente Crítico",
      subtitle: "Descripcion del curso 11",
      link: "/contact",
      cop: "700.000",
      usd: "180",
      sessions: "18",
    },
    {
      id: 10,
      img: curso10,
      logo: logo,
      title: "Mascotas exóticas",
      subtitle: "Descripcion del curso 10",
      link: "/contact",
      cop: "700.000",
      usd: "180",
      sessions: "17",
    },
    {
      id: 12,
      img: curso12,
      logo: logo,
      title: "Resistencia Microbiana",
      subtitle: "Descripcion del curso 12",
      link: "/contact",
      cop: "350.000",
      usd: "90",
      sessions: "9",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div
        className={`  red__gradient absolute z-[0] w-[30%] h-[70%] -right-[50%] rounded-full  bottom-0`}
      />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Todos los Cursos
          <br className="sm:block hidden" />
        </h2>
      </div>

      <div className=" w-full  flex items-center justify-end mb-16">
        <Price
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode}
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
        {/* bovinos */}
        {coursesLink.map(
          ({
            id,
            img,
            logo,
            title,
            subtitle,
            usd,
            cop,
            link,
            sessions,
            href,
          }) => (
            <div
              key={id}
              className={`card   shadow-sm ${
                darkMode
                  ? "bg-dark shadow-white"
                  : "bg-base-100 shadow-gray-300"
              }`}
            >
              <figure className="relative">
                <img src={img} alt="Shoes" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://api.whatsapp.com/send?phone=573243291412"
                    className=""
                    target="_blank"
                  >
                    <Link to={link}>
                      <button className={`${styles.button} `}>
                        Más Información
                      </button>
                    </Link>
                  </a>
                </div>
              </figure>
              <div className="card-body justify-between">
                <h2 className={`${styles.title}`}>{title}</h2>

                <div className="card-actions justify-between ">
                  <div>
                    <span className="text-primary">{sessions} clases</span>
                  </div>
                  <div className="flex justify-between">
                    {language === "en" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${usd}</span>
                        <span className="text-primary ">USD</span>
                        <img src={enImg} className="h-6" alt="" />
                      </div>
                    ) : language === "es" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${cop} </span>
                        <span className="text-primary ">COP</span>
                        <img src={colImg} className="h-6" alt="" />
                      </div>
                    ) : (
                      <span className="text-primary">Otro</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        {/* los otros */}
        {coursesAnchor.map(
          ({
            id,
            img,
            logo,
            title,
            subtitle,
            usd,
            cop,
            link,
            sessions,
            href,
          }) => (
            <div
              key={id}
              className={`card   shadow-sm ${
                darkMode
                  ? "bg-dark shadow-white"
                  : "bg-base-100 shadow-gray-300"
              }`}
            >
              <figure className="relative">
                <img src={img} alt="Shoes" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://api.whatsapp.com/send?phone=573243291412"
                    className=""
                    target="_blank"
                  >
                    <button className={`${styles.button} `}>
                      Más Información
                    </button>
                  </a>
                </div>
              </figure>
              <div className="card-body justify-between">
                <h2 className={`${styles.title}`}>{title}</h2>

                <div className="card-actions justify-between ">
                  <div>
                    <span className="text-primary">{sessions} clases</span>
                  </div>
                  <div className="flex justify-between">
                    {language === "en" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${usd}</span>
                        <span className="text-primary ">USD</span>
                        <img src={enImg} className="h-6" alt="" />
                      </div>
                    ) : language === "es" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${cop} </span>
                        <span className="text-primary ">COP</span>
                        <img src={colImg} className="h-6" alt="" />
                      </div>
                    ) : (
                      <span className="text-primary">Otro</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Catalogue;
