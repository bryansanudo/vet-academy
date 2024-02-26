import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import VideoComponent from "@/components/studyPlan/bovinosLayout/VideoComponent";
import { LuFileVideo } from "react-icons/lu";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GrDocumentVideo } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";
import Hello from "@/components/studyPlan/bovinosLayout/Hello";

const CourseComponent = ({ id, darkMode, name }) => {
  const scroltop = () => {
    window.scrollTo(0, 0);
  };
  const activeLink = ({ isActive }) =>
    isActive ? " border border-primary my-4  rounded-xl" : "";
  const [userData, setUserData] = useState({ sessions: [], reading: [] }); // Inicializa userData con un objeto vacío que tiene un array sessions

  const getUserData = async (id) => {
    const docRef = doc(db, "courses", id);
    const search = await getDoc(docRef);
    const infoDocu = search.data();
    return infoDocu;
  };

  useEffect(() => {
    async function fetch() {
      const response = await getUserData(id);
      setUserData(response);
    }
    fetch();
  }, [id]);

  return (
    <>
      <h2 className={`${styles.heading2} mt-10 `}>{id}</h2>

      <div className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
        <div
          className={`red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
        />
        {/* navegacion */}
        <div className=" md:w-[560px] w-full mx-auto   md:mr-16 flex flex-col md:mt-4 mt-12 ">
          {/* archivos */}

          <div
            className={` ${
              darkMode ? "shadow-white" : "shadow-black"
            } rounded-lg  w-full shadow-sm mb-6 pb-4 `}
          >
            <details className="">
              <summary className=" p-3 cursor-pointer text-primary">
                <div className="flex items-center gap-2 ">
                  <span
                    className={`${darkMode ? "text-white" : "text-black"} ${
                      styles.title
                    }`}
                  >
                    Documentos{" "}
                  </span>
                  <GrDocumentPdf className="text-2xl  text-primary" />
                </div>
              </summary>
              <ul className="">
                {userData.reading.map((read) => (
                  <li key={read.id} className=" w-full">
                    <div className="flex flex-col mx-3 ">
                      <div
                        className={` ${styles.subtitle} ${
                          darkMode ? "text-white" : "text-black"
                        } hover:bg-primary hover:text-white rounded-xl p-2 cursor-pointer   `}
                      >
                        <span className="mr-2  font-bold">{read.id}</span>
                        <span>{read.title}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/*  clases */}
          <div
            className={` ${
              darkMode ? "shadow-white" : "shadow-black"
            } rounded-lg  w-full shadow-sm pb-4 `}
          >
            <details open>
              <summary className=" p-3 cursor-pointer text-primary">
                <div className="flex items-center gap-2 ">
                  <span
                    className={`${darkMode ? "text-white" : "text-black"} ${
                      styles.title
                    } `}
                  >
                    Clases
                  </span>
                  <GrDocumentVideo className="text-2xl text-primary" />
                </div>
              </summary>
              <ul className="">
                {
                  userData.sessions.map((session) => (
                    /*  session.link && ( */
                    <li key={session.id} className="w-full">
                      <div className="flex flex-col mx-3">
                        <NavLink
                          onClick={scroltop}
                          to={session.title}
                          className={activeLink}
                        >
                          <div
                            className={` ${styles.subtitle} ${
                              darkMode ? "text-white" : "text-black"
                            } hover:bg-primary hover:text-white rounded-xl p-2`}
                          >
                            <span className="mr-2 font-bold">{session.id}</span>
                            <span>{session.title}</span>
                          </div>
                        </NavLink>
                      </div>
                    </li>
                  ))
                  /* ) */
                }
              </ul>
            </details>
          </div>
        </div>
        {/* rutas */}

        <Routes>
          {userData.sessions.map(({ id, title, link, professor, date }) => (
            <Route
              key={id}
              path={title}
              element={
                <VideoComponent
                  title={title}
                  src={link}
                  darkMode={darkMode}
                  id={id}
                  professor={professor}
                  date={date}
                />
              }
            />
          ))}
          <Route path="/" element={<Hello name={name} course={id} />} />
        </Routes>
      </div>
    </>
  );
};

export default CourseComponent;
