import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link, Route, Routes } from "react-router-dom";
import CourseComponent from "@/components/studyPlan/CourseComponent";

const ProtectedCourses = ({ darkMode }) => {
  const userEmail = useSelector(selectEmail);
  const [userData, setUserData] = useState({
    name: "",
    title: "",
    email: "",
    courses: [],
  });

  const getUserData = async (id) => {
    const docRef = doc(db, "users", id);

    const search = await getDoc(docRef);

    const infoDocu = search.data();
    return infoDocu;
  };
  useEffect(() => {
    async function fetch() {
      const response = await getUserData(userEmail);

      setUserData(response);
    }

    fetch();
  }, []);
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div
        className={`  red__gradient absolute z-[0] w-[30%] h-[70%] -right-[50%] rounded-full  bottom-0`}
      />
      {/* header */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Mi plan de estudios - {userEmail}
          <br className="sm:block hidden" />
        </h2>
      </div>
      {/* content */}
      <div className="bg-green-200">
        <p>Correo: {userData.email}</p>

        {/*  navegacion */}
        <div>
          Cursos:
          {userData.courses.map((course, index) => (
            <div key={index} className="">
              <Link to={course}>{course}</Link>
            </div>
          ))}
        </div>
        {/* rutas */}
        <div className="bg-red-500">
          <Routes>
            {userData.courses.map((course, index) => (
              <Route
                key={index}
                path={course}
                element={<CourseComponent title={course} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default ProtectedCourses;
