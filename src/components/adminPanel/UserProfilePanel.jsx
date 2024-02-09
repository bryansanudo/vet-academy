import React, { useState, useEffect } from "react";
import { db } from "@/configFirebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const availableCourses = [
  "bovinos",
  "manejo del paciente",
  "infecciones",
  "enfermedades",
];

const UserProfilePanel = ({ userData, onReturn }) => {
  const redirect = useNavigate();
  const initialState = {
    name: userData.name,
    title: userData.title,
    email: userData.email,
    courses: userData.courses,
  };

  const [updateUser, setUpdateUser] = useState({ ...initialState });

  const handleCourseChange = (course) => {
    const isChecked = updateUser.courses.includes(course);
    if (isChecked) {
      setUpdateUser((prevState) => ({
        ...prevState,
        courses: prevState.courses.filter((item) => item !== course),
      }));
    } else {
      setUpdateUser((prevState) => ({
        ...prevState,
        courses: [...prevState.courses, course],
      }));
    }
  };
  const handleInputChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const handleReturn = () => {
    onReturn();
  };

  const editUser = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, "users", initialState.email), { ...updateUser });
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
          Panel de Usuario
        </h2>
        <h2 onClick={handleReturn} className="cursor-pointer">
          Volver
        </h2>
        <div className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 mt-16">
          <p>Correo: {updateUser.email}</p>
          <p>Nombre: {updateUser.name}</p>
          <p>Titulo: {updateUser.title}</p>
          <p>Cursos: {updateUser.courses.join(", ")}</p>
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
            value={updateUser.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Titulo</label>
          <input
            required
            type="text"
            className="input input-primary text-lg input-md w-full"
            name="title"
            value={updateUser.title}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Cursos</label>
          {availableCourses.map((course) => (
            <div key={course}>
              <input
                type="checkbox"
                id={course}
                name={course}
                checked={updateUser.courses.includes(course)}
                onChange={() => handleCourseChange(course)}
              />
              <label htmlFor={course}>{course}</label>
            </div>
          ))}
          <button>Matricular Usuario</button>
        </form>
      </div>
    </>
  );
};

export default UserProfilePanel;
