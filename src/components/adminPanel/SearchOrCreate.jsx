import React, { useEffect, useState } from "react";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import UserProfilePanel from "./UserProfilePanel"; // Importa el componente UserProfilePanel
import { useNavigate } from "react-router-dom";
import styles from "@/style";
import LoaderAdmin from "@/components/LoaderAdmin";

const SearchOrCreate = () => {
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const searchDocumentOrCreateDocument = async (idDocument) => {
    const initialData = {
      email: email,
      name: "",
      title: "",
      courses: [],
    };
    const docRef = doc(db, "users", idDocument);

    const search = await getDoc(docRef);

    if (search.exists()) {
      const infoDocu = search.data();
      return infoDocu;
    } else {
      await setDoc(docRef, { ...initialData });
      const search = await getDoc(docRef);
      const infoDocu = search.data();
      return infoDocu;
    }
  };

  async function fetch(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await searchDocumentOrCreateDocument(email);
    setIsLoading(false);
    setUserData(response);
    setShowForm(false); // Oculta el formulario después de obtener los datos del usuario
  }

  const handleReturnToForm = () => {
    setShowForm(true); // Muestra el formulario nuevamente
    setUserData({}); // Resetea los datos del usuario
  };

  return (
    <>
      {isLoading && <LoaderAdmin />}
      <div className="flex">
        {showForm ? (
          <div className="flex flex-col items-center mx-auto   ">
            <h2 className={`${styles.adminTitle}`}>Matricular Usuario</h2>
            <form
              onSubmit={fetch}
              className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 mt-10 "
            >
              <input
                type="email"
                required
                placeholder="Correo"
                className="input  input-primary  w-full"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className={`${styles.button} w-full items-center justify-center`}
              >
                Matricular
              </button>
            </form>
          </div>
        ) : (
          <UserProfilePanel userData={userData} onReturn={handleReturnToForm} />
        )}
      </div>
    </>
  );
};

export default SearchOrCreate;
