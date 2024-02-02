import styles from "@/style";

import { Link } from "react-router-dom";
import curso from "@/assets/curso.jpg";
import logo from "@/assets/vet-academy-logo.jpg";
import { CiSearch } from "react-icons/ci";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import curso1 from "@/assets/masterclass/gratuito1.png";
import curso2 from "@/assets/masterclass/gratuito2.png";

const Catalogue = ({ darkMode }) => {
  const feed = [
    {
      id: 1,
      img: curso1,
      logo: logo,
      title: "Lipidosis hepática",
      subtitle: "Descripcion del curso 1",
      link: "/curso1",
      price: "350.000",
    },
    {
      id: 2,
      img: curso2,
      logo: logo,
      title: "Distemper canino",
      subtitle: "Descripcion del curso 2",
      link: "/curso2",
      price: "350.000",
      italic: "italic",
    },
  ];

  const itemsPerPage = 8;
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
          Masterclass Gratuitas
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
        {currentItems.map(
          ({ id, img, logo, title, subtitle, price, link, italic }) => (
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
                  <button className="btn btn-primary">Más Información</button>
                </div>
              </figure>
              <div className="card-body">
                <h2 className={` ${styles.title} ${italic} `}>{title}</h2>
                <p className={`${styles.subtitle}`}>{subtitle}</p>
                <div className="card-actions justify-end">
                  {/* <div>
                    <span className="text-primary  font-bold">${price}</span>
                  </div> */}
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
