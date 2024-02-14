import styles from "@/style";

import logo from "@/assets/vet-academy-logo.jpg";

import { useEffect } from "react";

import curso1 from "@/assets/masterclass/gratuito1.png";
import curso2 from "@/assets/masterclass/gratuito2.png";
import { Link, Route, Routes } from "react-router-dom";
import VideoComponent from "@/components/masterclass/VideoComponent";
import neonatologia from "@/assets/masterclass/neonatologia.png";

const Catalogue = ({ darkMode }) => {
  const masterclass = [
    /*  {
      id: 1,
      img: curso1,
      logo: logo,
      title: "Lipidosis hepática",
      subtitle: "Descripcion del curso 1",
      link: "lipidosis",
      price: "350.000",
    }, */
    {
      id: 1,
      img: neonatologia,
      logo: logo,
      title: "Neonatología",
      subtitle: "Descripcion del curso 2",
      link: "neonatologia",
    },
    /* {
      id: 2,
      img: curso2,
      logo: logo,
      title: "Distemper canino",
      subtitle: "Descripcion del curso 2",
      link: "distemper",
    }, */
  ];

  useEffect(() => {
    window.scrollTo(0, 150);
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
          Masterclass Gratuitas
          <br className="sm:block hidden" />
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
        {masterclass.map(
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
                  <Link to={link}>
                    <button className={`${styles.button} `}>
                      Ver la clase
                    </button>
                  </Link>
                </div>
              </figure>
              <div className="card-body">
                <h2 className={` ${styles.title} ${italic} `}>{title}</h2>
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-full">
        <Routes>
          <Route
            path="lipidosis"
            element={
              <VideoComponent darkMode={darkMode} module="Lipidosis Hepática" />
            }
          />
          <Route
            path="distemper"
            element={
              <VideoComponent darkMode={darkMode} title="Distemper Canino" />
            }
          />
          <Route
            path="neonatologia"
            element={
              <VideoComponent
                darkMode={darkMode}
                title="Neonatología"
                src="aCsYFKCkv0M"
              />
            }
          />
        </Routes>
      </div>
    </section>
  );
};

export default Catalogue;
