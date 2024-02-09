import React, { useState, useEffect } from "react";
import { db } from "@/configFirebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import styles from "@/style";

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
      <div className=" flex flex-col-reverse  md:flex-row gap-6 w-full ">
        <div className="flex flex-col items-center justify-center mx-auto pt-10  md:w-[50%] ">
          <div
            key={updateUser.email}
            className="flex flex-col items-center justify-between shadow-sm shadow-black rounded-xl  pt-4 p-6  "
          >
            <div className="flex items-center justify-center gap-4">
              <div className="">{updateUser.email}</div>
              <div className="flex items-center justify-center p-2 bg-primary  mask mask-circle ">
                <FaUserDoctor className="text-2xl text-white" />
              </div>
            </div>
            <div className=" flex items-center justify-center flex-col mt-4">
              <div className="text-lg">{updateUser.name}</div>
            </div>

            <div className="shadow-sm shadow-gray-400 p-1 rounded-lg my-4">
              <div>
                {updateUser.courses.map((course, i) => (
                  <div key={i} className="flex items-center">
                    <GoDot />
                    <div>{course}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form
            onSubmit={editUser}
            className="flex flex-col gap-6 max-w-[900px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 mt-10"
          >
            <label className="w-full text-left">Nombre del usuario</label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="name"
              value={updateUser.name}
              onChange={(e) => handleInputChange(e)}
            />

            <label className="w-full text-left">Cursos</label>
            <div className=" w-full grid  grid-cols-1 md:grid-cols-4">
              {availableCourses.map((course) => (
                <div key={course} className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id={course}
                    name={course}
                    checked={updateUser.courses.includes(course)}
                    onChange={() => handleCourseChange(course)}
                  />
                  <label className="ml-2" htmlFor={course}>
                    {course}
                  </label>
                </div>
              ))}
            </div>
            <button>Matricular Usuario</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfilePanel;
