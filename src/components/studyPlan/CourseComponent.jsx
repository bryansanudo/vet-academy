import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";
import { NavLink, Route, Routes } from "react-router-dom";

import VideoComponent from "@/components/studyPlan/bovinosLayout/VideoComponent";

const CourseComponent = ({ id }) => {
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
    <div className="bg-blue-500 p-4 flex">
      {/* navegacion */}
      <div className="flex flex-col gap-10">
        <h2 className="bg-pink-500">{id}</h2>
        {userData.sessions.length > 0 ? (
          userData.sessions.map((session) => (
            <div key={session.id}>
              <h2>{session.title}</h2>
              <NavLink to={session.title}>
                <h2>-z</h2>
              </NavLink>
            </div>
          ))
        ) : (
          <p>No hay sesiones disponibles</p>
        )}
      </div>
      {/* rutas */}
      <div className="bg-red-500 w-full">
        <Routes>
          {userData.sessions.map(({ id, title, link }) => (
            <Route
              key={id}
              path={title}
              element={<VideoComponent title={title} src={link} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default CourseComponent;
