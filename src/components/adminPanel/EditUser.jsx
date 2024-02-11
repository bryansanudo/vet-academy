import React, { useState, useEffect } from "react";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const availableCourses = [
  "bovinos",
  "manejo del paciente",
  "infecciones",
  "enfermedades",
];

const EditUser = () => {
  const { id } = useParams();
  const redirect = useNavigate();

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
      const response = await getUserData(id);
      console.log(response);
      setUserData(response);
      console.log(userData);
    }

    fetch();
  }, []);

  const handleCourseChange = (course) => {
    const isChecked = userData.courses && userData.courses.includes(course);
    if (isChecked) {
      setUserData((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter((item) => item !== course),
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        courses: [...prevState.courses, course],
      }));
    }
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const editUser = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, "users", id), { ...userData });
      toast.success("Usuario actualizado con éxito");
      redirect("/admin/all-users");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto pt-10">
        <h2 className="font-bold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl p-2">
          Panel de Usuario {id}
        </h2>

        <div className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-start shadow-lg shadow-gray-500 rounded-xl p-8 mt-16">
          <p>Correo: {userData.email}</p>
          <p>Nombre: {userData.name}</p>
          <p>Titulo: {userData.title}</p>
          <div>
            Cursos:
            {userData.courses && userData.courses.length > 0
              ? userData.courses.map((course, index) => (
                  <div key={index}>
                    <span className="">{course}</span>
                  </div>
                ))
              : "No hay cursos disponibles"}
          </div>
        </div>
      </div>
      <div className="bg-green-500">
        <form onSubmit={editUser}>
          <label className="w-full text-left">Nombre del usuario</label>
          <input
            required
            type="text"
            className="input input-primary text-lg input-md w-full"
            name="name"
            value={userData.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Titulo</label>
          <input
            required
            type="text"
            className="input input-primary text-lg input-md w-full"
            name="title"
            value={userData.title}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Cursos</label>
          {availableCourses.map((course) => (
            <div key={course}>
              <input
                type="checkbox"
                id={course}
                name={course}
                checked={userData.courses.includes(course)}
                onChange={() => handleCourseChange(course)}
              />
              <label htmlFor={course}>{course}</label>
            </div>
          ))}
          <button>Actualizar Usuario</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
