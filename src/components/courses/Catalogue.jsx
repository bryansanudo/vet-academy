import styles from "@/style";

import { Link } from "react-router-dom";
import curso from "@/assets/curso.jpg";
import logo from "@/assets/vet-academy-logo.jpg";
import { CiSearch } from "react-icons/ci";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Catalogue = ({ darkMode }) => {
  const feed = [
    {
      id: 1,
      img: curso,
      logo: logo,
      title: "Curso 1",
      subtitle: "Descripcion del curso 1",
      link: "/curso1",
      price: "350.000",
    },
    {
      id: 2,
      img: curso,
      logo: logo,
      title: "Curso 2",
      subtitle: "Descripcion del curso 2",
      link: "/curso2",
      price: "350.000",
    },
    {
      id: 3,
      img: curso,
      logo: logo,
      title: "Curso 3",
      subtitle: "Descripcion del curso 3",
      link: "/curso3",
      price: "350.000",
    },
    {
      id: 4,
      img: curso,
      logo: logo,
      title: "Curso 4",
      subtitle: "Descripcion del curso 4",
      link: "/curso4",
      price: "350.000",
    },
    {
      id: 5,
      img: curso,
      logo: logo,
      title: "Curso 5",
      subtitle: "Descripcion del curso 5",
      link: "/curso5",
      price: "350.000",
    },
    {
      id: 6,
      img: curso,
      logo: logo,
      title: "Curso 6",
      subtitle: "Descripcion del curso 6",
      link: "/curso6",
      price: "350.000",
    },
    {
      id: 7,
      img: curso,
      logo: logo,
      title: "Curso 7",
      subtitle: "Descripcion del curso 7",
      link: "/curso7",
      price: "350.000",
    },
    {
      id: 8,
      img: curso,
      logo: logo,
      title: "Curso 8",
      subtitle: "Descripcion del curso 8",
      link: "/curso8",
      price: "350.000",
    },
    {
      id: 9,
      img: curso,
      logo: logo,
      title: "Curso 9",
      subtitle: "Descripcion del curso 9",
      link: "/curso9",
      price: "350.000",
    },
    {
      id: 10,
      img: curso,
      logo: logo,
      title: "Curso 10",
      subtitle: "Descripcion del curso 10",
      link: "/curso10",
      price: "350.000",
    },
    {
      id: 11,
      img: curso,
      logo: logo,
      title: "Curso 11",
      subtitle: "Descripcion del curso 11",
      link: "/curso11",
      price: "350.000",
    },
    {
      id: 12,
      img: curso,
      logo: logo,
      title: "Curso 12",
      subtitle: "Descripcion del curso 12",
      link: "/curso12",
      price: "350.000",
    },
  ];

  const itemsPerPage = 4;
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
      <div className="max-w-md shadow-black shadow-md rounded-xl mb-6">
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
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
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

        {currentItems.map(({ id, img, logo, title, subtitle, price, link }) => (
          <div key={id} className="card bg-base-100  shadow-sm shadow-primary">
            <figure className="relative">
              <img src={img} alt="Shoes" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="btn btn-primary">Más Información</button>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{subtitle}</p>
              <div className="card-actions justify-end">
                <div>
                  <span className="text-primary">${price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
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
