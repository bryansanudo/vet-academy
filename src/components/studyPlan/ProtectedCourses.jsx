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
        <div className="  flex flex-col md:flex-row justify-between py-1 px-6 border-primary border-[1px] rounded-xl">
          {userData.courses.map((course, index) => (
            <div key={index} className="">
              <Link to={course}>{course}</Link>
            </div>
          ))}
        </div>
        {/* rutas */}
        <div className=" w-full  ">
          <Routes>
            {userData.courses.map((course, index) => (
              <Route
                key={index}
                path={`${course}/*`}
                element={<CourseComponent id={course} />}
              />
            ))}
          </Routes>
        </div>
      </section>
    </>
  );
};

export default ProtectedCourses;
