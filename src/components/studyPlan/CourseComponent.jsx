import React, { useState, useEffect } from "react";
import styles from "@/style";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { db } from "@/configFirebase";
import { doc, getDoc } from "firebase/firestore";

const CourseComponent = ({ id }) => {
  const [userData, setUserData] = useState({ sessions: [] }); // Inicializa userData con un objeto vacío que tiene un array sessions

  const getUserData = async (id) => {
    const docRef = doc(db, "courses", id);
    const search = await getDoc(docRef);
    const infoDocu = search.data();
    return infoDocu;
  };

  /*   useEffect(() => {
    async function fetch() {
      const response = await getUserData(id);
      setUserData(response);
    }
    fetch();
  }, [id]); */

  return (
    <div>
      <h2 className="bg-pink-500">{id}</h2>
      <div className="flex flex-col gap-10">
        {userData.sessions.length > 0 ? (
          userData.sessions.map((session) => (
            <div key={session.id}>
              <h2>{session.title}</h2>
              <p>ID: {session.id}</p>
              <p>Módulo: {session.module}</p>
              <a href={session.link}>Enlace de la clase</a>
            </div>
          ))
        ) : (
          <p>No hay sesiones disponibles</p>
        )}
      </div>
    </div>
  );
};

export default CourseComponent;
