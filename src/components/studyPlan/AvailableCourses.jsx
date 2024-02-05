import styles from "@/style";

import { Link } from "react-router-dom";

import logo from "@/assets/vet-academy-logo.jpg";

import { useEffect, useState } from "react";

import colImg from "@/assets/col.png";
import enImg from "@/assets/en.png";
import { FaPhotoVideo } from "react-icons/fa";
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

const AvailableCourses = ({ darkMode }) => {
  const [language, setLanguage] = useState("en");
  const courses = [
    {
      id: 6,
      img: curso6,
      logo: logo,
      title: "Bovinos",
      subtitle: "Descripcion del curso 6",
      link: "/bovinos",
      cop: "1.000.000",
      usd: "350",
      sessions: "32",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
          Mi plan de estudios
          <br className="sm:block hidden" />
        </h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
        {courses.map(
          ({ id, img, logo, title, subtitle, usd, cop, link, sessions }) => (
            <figure key={id} className={`relative`}>
              <Link to={link}>
                <img
                  src={img}
                  alt="Shoes"
                  className={`${
                    darkMode ? "shadow-white" : "shadow-black"
                  } shadow-lg rounded-xl`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className={`${styles.button} `}>
                    <FaPhotoVideo className="text-lg text-white" />{" "}
                  </button>
                </div>
              </Link>
            </figure>
          )
        )}
      </div>
    </section>
  );
};

export default AvailableCourses;
