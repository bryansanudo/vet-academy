import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink, Route, Routes } from "react-router-dom";

import VideoComponent from "@/components/studyPlan/bovinosLayout/VideoComponent";
import { LuFileVideo } from "react-icons/lu";

const CourseComponent = ({ id, darkMode }) => {
  const scroltop = () => {
    window.scrollTo(0, 0);
  };
  const activeLink = ({ isActive }) =>
    isActive ? " border border-primary m-4 p-1 rounded-xl" : "";
  const [userData, setUserData] = useState({ sessions: [] }); // Inicializa userData con un objeto vacío que tiene un array sessions

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
    <div className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      <div
        className={`red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
      />
      {/* navegacion */}
      <div className="max-w-[400px] md:border-r-2  pr-4 mx-auto mr-16 flex flex-col ">
        <h2 className={`${styles.heading2}`}>{id}</h2>
        <ul>
          {userData.sessions.length > 0 ? (
            userData.sessions.map((session) => (
              <li key={session.id} className=" w-full">
                <div className="flex flex-col ">
                  <NavLink
                    onClick={scroltop}
                    to={session.title}
                    className={activeLink}
                  >
                    <div className="flex items-center py-2  w-full hover:scale-105 duration-500">
                      <div
                        className={` ${styles.subtitle} ${
                          darkMode ? "text-white" : "text-black"
                        } mr-4 mt-[2px] `}
                      >
                        <span className="mr-2 text-primary font-bold">
                          {session.id}
                        </span>
                        <span>{session.title}</span>
                      </div>
                      <div>
                        <LuFileVideo className="text-2xl hover:scale-105 duration-500 cursor-pointer text-primary" />
                      </div>
                    </div>
                  </NavLink>
                  <div className="w-full h-[1px] bg-gray-200" />
                </div>
              </li>
            ))
          ) : (
            <p>No hay sesiones disponibles</p>
          )}
        </ul>
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
        <Route path="/" element={<VideoComponent />} />
      </Routes>
    </div>
  );
};

export default CourseComponent;
