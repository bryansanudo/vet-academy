import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, Route, Routes } from "react-router-dom";
import CourseComponent from "@/components/studyPlan/CourseComponent";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
const ProtectedCourses = ({ darkMode }) => {
  const redirect = useNavigate();
  const userEmail = useSelector(selectEmail);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = async (id) => {
    const docRef = doc(db, "users", id);

    const search = await getDoc(docRef);

    if (search.exists()) {
      const infoDocu = search.data();

      return infoDocu;
    }
  };

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const response = await getUserData(userEmail);
      setIsLoading(false);
      setUserData(response);
    }

    fetch();
  }, []);

  // Si userData aún no está definido, muestra un mensaje de carga o espera.
  if (!userData) {
    return (
      <>
        {isLoading && <Loader />}
        <div className="h-[800px] flex items-center justify-center">
          <div className={`${styles.title}`}>
            Aun no estas matriculado a nigun curso
          </div>
        </div>
      </>
    );
  }

  // Si userData está definido pero no tiene cursos, muestra un mensaje indicando que el usuario no está matriculado.
  /*  if (!userData.courses || userData.courses.length === 0) {
    return <div className="">Aún no estás matriculado en ningún curso.</div>;
  } */

  return (
    <>
      {isLoading && <Loader />}
      <section
        id="clients"
        className={`flex flex-col min-h-screen ${styles.paddingY} `}
      >
        <div
          className={`red__gradient absolute z-[0] w-[30%] h-[60%] -left-[50%] rounded-full  bottom-40`}
        />

        {/* content */}

        {/*  navegacion */}
        <div className="flex items-center justify-start ">
          <ul
            className={` ${
              darkMode ? "shadow-white" : "shadow-black"
            } rounded-lg  w-[330px] p-3 shadow-sm `}
          >
            <li>
              <details open>
                <summary className=" p-3 cursor-pointer text-primary">
                  <div className="flex items-center gap-2 ">
                    <span
                      className={`${darkMode ? "text-white" : "text-black"} ${
                        styles.title
                      }`}
                    >
                      Mi Plan de Estudios
                    </span>
                    <FaUserDoctor className="text-2xl  text-primary" />
                  </div>
                </summary>
                <ul className={`${styles.subtitle}  mt-2`}>
                  {userData.courses.map((course, index) => (
                    <Link key={index} to={course}>
                      <li className="flex items-center  gap-2 hover:bg-primary hover:text-white rounded-lg p-2 ">
                        <AiOutlineFolderOpen className="text-3xl " />
                        {course}
                      </li>
                    </Link>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* rutas */}
        <div className=" w-full  ">
          <Routes>
            {userData.courses.map((course, index) => (
              <Route
                key={index}
                path={`${course}/*`}
                element={
                  <CourseComponent
                    darkMode={darkMode}
                    id={course}
                    name={userData.name}
                  />
                }
              />
            ))}
          </Routes>
        </div>
      </section>
    </>
  );
};

export default ProtectedCourses;
