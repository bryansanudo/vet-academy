import styles from "@/style";

import { Link } from "react-router-dom";
import curso from "@/assets/curso.jpg";
import logo from "@/assets/vet-academy-logo.jpg";
import { CiSearch } from "react-icons/ci";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  const feed = [
    {
      id: 1,
      img: curso1,
      logo: logo,
      title: "Etología en la clínica diaria",
      subtitle: "Descripcion de Etología en la clínica diaria",
      link: "/curso1",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 2,
      img: curso2,
      logo: logo,
      title: "Oftalmología",
      subtitle: "Descripcion del curso 2",
      link: "/curso2",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 3,
      img: curso3,
      logo: logo,
      title: "Endocrinología",
      subtitle: "Descripcion del curso 3",
      link: "/curso3",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 4,
      img: curso4,
      logo: logo,
      title: "Oncología",
      subtitle: "Descripcion del curso 4",
      link: "/curso4",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 5,
      img: curso5,
      logo: logo,
      title: "Hospitalización",
      subtitle: "Descripcion del curso 5",
      link: "/curso5",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 6,
      img: curso6,
      logo: logo,
      title: "Bovinos",
      subtitle: "Descripcion del curso 6",
      link: "/bovinos",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 7,
      img: curso7,
      logo: logo,
      title: "Enfermedades Infecciosas",
      subtitle: "Descripcion del curso 7",
      link: "/curso7",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 8,
      img: curso8,
      logo: logo,
      title: "Emergencias Veterinarias",
      subtitle: "Descripcion del curso 8",
      link: "/curso8",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 9,
      img: curso9,
      logo: logo,
      title: "Enfermeria",
      subtitle: "Descripcion del curso 9",
      link: "/curso9",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 10,
      img: curso10,
      logo: logo,
      title: "Mascotas exóticas",
      subtitle: "Descripcion del curso 10",
      link: "/curso10",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 11,
      img: curso11,
      logo: logo,
      title: "Paciente Crítico",
      subtitle: "Descripcion del curso 11",
      link: "/curso11",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 12,
      img: curso12,
      logo: logo,
      title: "Resistencia Microbiana",
      subtitle: "Descripcion del curso 12",
      link: "/curso12",
      cop: "1.000.000",
      usd: "350",
    },
    {
      id: 12,
      img: curso13,
      logo: logo,
      title: "Manejo del dolor en Caninos y Felinos",
      subtitle: "Descripcion del curso 12",
      link: "/curso12",
      cop: "1.000.000",
      usd: "350",
    },
  ];

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feed.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(feed.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 150);
  }, [currentPage]);
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

      {/*  <div className="max-w-md shadow-black shadow-md rounded-xl mb-6">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <CiSearch />
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Buscar..."
          />
        </div>
      </div> */}
      <div className=" w-full flex items-center justify-end">
        <div
          className={`mb-20 shadow-sm ${
            darkMode ? "bg-dark shadow-white" : "bg-base-100 shadow-gray-300"
          } rounded-lg p-2`}
        >
          <Price
            language={language}
            setLanguage={setLanguage}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
        {/* {cards.map(({ id, img, title, subtitle, link }) => (
        <div
          key={id}
          className={`flex flex-col  items-center    rounded-[20px] ${
            darkMode
              ? "shadow-sm shadow-white feedback-card  "
              : "shadow-md shadow-black"
          }
`}
        >
          <div className="flex flex-col justify-between h-full   ">
            <div className="p-10">
              <p className={`${styles.title} mb-3 `}>{title}</p>
              <p className={`${styles.subtitle}`}>{subtitle}</p>
            </div>
            <div className="flex items-center justify-end  mr-4 mb-6  ">
              <button
                className={`font-semibold text-[18px] link link-primary  `}
              >
                <Link to={link}>know more</Link>
              </button>
            </div>
          </div>
        </div>
      ))} */}

        {currentItems.map(
          ({ id, img, logo, title, subtitle, usd, cop, link }) => (
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
                  <Link to={link}>
                    <button className="btn btn-primary">Más Información</button>
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <h2 className={`${styles.title}`}>{title}</h2>
                <p className={`${styles.subtitle}`}>Descripción</p>
                <div className="card-actions justify-end">
                  <div>
                    {language === "en" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${usd} </span>
                        <img src={enImg} className="h-6" alt="" />
                      </div>
                    ) : language === "es" ? (
                      <div className="flex  gap-2 items-end justify-center">
                        <span className="text-primary ">${cop} </span>
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
      <div className="hidden md:flex  items-center w-full justify-center gap-4 ">
        <button className="" onClick={prevPage}>
          <FaArrowLeft className="dark:text-white" />
        </button>

        {Array.from({
          length: Math.ceil(feed.length / itemsPerPage),
        }).map((_, index) => (
          <div
            className={`cursor-pointer rounded-full h-8 w-8 flex items-center justify-center ${
              currentPage === index + 1 ? "bg-primary" : "bg-gray-600"
            }  `}
            key={index}
            onClick={() => paginate(index + 1)}
          >
            <button className={` text-white`}>{index + 1}</button>
          </div>
        ))}

        <button className="" onClick={nextPage}>
          <FaArrowRight className="dark:text-white" />
        </button>
      </div>

      <div className="flex items-center justify-start w-full gap-2 md:hidden">
        <p className={`${styles.title}`}>Pagina actual</p>
        <select
          value={currentPage}
          onChange={(e) => paginate(parseInt(e.target.value, 10))}
          className="dark:bg-gray-800 dark:text-white px-2 py-1 border rounded"
        >
          {Array.from({
            length: Math.ceil(feed.length / itemsPerPage),
          }).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Catalogue;
