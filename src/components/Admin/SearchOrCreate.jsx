import React, { useEffect, useState } from "react";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import UserProfilePanel from "./UserProfilePanel"; // Importa el componente UserProfilePanel

const SearchOrCreate = () => {
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(true);

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
    const response = await searchDocumentOrCreateDocument(email);
    setUserData(response);
    setShowForm(false); // Oculta el formulario después de obtener los datos del usuario
  }

  const handleReturnToForm = () => {
    setShowForm(true); // Muestra el formulario nuevamente
    setUserData({}); // Resetea los datos del usuario
  };

  return (
    <div>
      {showForm ? (
        <div className="flex flex-col items-center justify-center mx-auto pt-10 ">
          <h2 className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl p-2">
            Registrate
          </h2>
          <form
            onSubmit={fetch}
            className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 mt-16 "
          >
            <input
              type="text"
              placeholder="Correo"
              className="input  input-primary  w-full"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-secondary capitalize w-full">
              Crear documento
            </button>
          </form>
        </div>
      ) : (
        <UserProfilePanel userData={userData} onReturn={handleReturnToForm} />
      )}
    </div>
  );
};

export default SearchOrCreate;
