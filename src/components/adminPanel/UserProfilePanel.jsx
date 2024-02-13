import React, { useState, useEffect } from "react";
import { db } from "@/configFirebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import styles from "@/style";
import LoaderAdmin from "@/components/LoaderAdmin";

const availableCourses = [
  "Bovinos",
  "Manejo del dolor en caninos y felinos",
  "Etología en la clínica diaria",
  "Oftalmología",
  "Endocrinología",
  "Oncología",
  "Hospitalización",
  "Enfermedades infecciosas",
  "Emergencias veterinarias",
  "Enfermería",
  "Paciente crítico",
  "Mascotas exóticas",
  "Resistencia microbiana",
];

const UserProfilePanel = ({ userData, onReturn }) => {
  const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const initialState = {
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    country: userData.country,
    city: userData.city,
    ocupation: userData.ocupation,
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
    setIsLoading(true);
    try {
      await setDoc(doc(db, "users", initialState.email), { ...updateUser });
      toast.success("Usuario actualizado con éxito");
      setIsLoading(false);
      redirect("/admin/all-users");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoaderAdmin />}
      <div className=" flex flex-col-reverse  md:flex-row gap-6 w-full mb-20 ">
        <div className="flex flex-col items-center justify-center    md:w-[50%]  ">
          <div
            key={updateUser.email}
            className="flex flex-col items-center justify-between shadow-sm h-full shadow-black rounded-xl  pt-4 p-6 w-full  "
          >
            <div className="flex items-center justify-center gap-4">
              <div className={`${styles.adminTitle}`}>{updateUser.email}</div>
              <div className="flex items-center justify-center p-2 bg-primary  mask mask-circle ">
                <FaUserDoctor className="text-2xl text-white" />
              </div>
            </div>
            <div className=" flex items-center justify-center flex-col mt-4">
              <div className={`${styles.adminTitle}`}>{updateUser.name}</div>
              <div className="text-lg">{updateUser.phone}</div>
              <div className="text-lg">{updateUser.country}</div>
              <div className="text-lg">{updateUser.city}</div>
              <div className="text-lg">{updateUser.ocupation}</div>
            </div>

            <div className="shadow-sm shadow-gray-400 p-1 rounded-lg my-4">
              <div>
                {updateUser.courses.map((course, i) => (
                  <div key={i} className="flex items-center">
                    <GoDot />
                    <div className="capitalize">{course}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-full">
          <form
            onSubmit={editUser}
            className="flex flex-col gap-4 max-w-[900px] items-center shadow-sm shadow-black rounded-xl p-8  "
          >
            <label className={`${styles.adminTitle} w-full text-left`}>
              Nombre
            </label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="name"
              value={updateUser.name}
              onChange={(e) => handleInputChange(e)}
            />
            <label className={`${styles.adminTitle} w-full text-left`}>
              Telefono
            </label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="phone"
              value={updateUser.phone}
              onChange={(e) => handleInputChange(e)}
            />
            <label className={`${styles.adminTitle} w-full text-left`}>
              País
            </label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="country"
              value={updateUser.country}
              onChange={(e) => handleInputChange(e)}
            />
            <label className={`${styles.adminTitle} w-full text-left`}>
              Ciudad
            </label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="city"
              value={updateUser.city}
              onChange={(e) => handleInputChange(e)}
            />
            <label className={`${styles.adminTitle} w-full text-left`}>
              Ocupación
            </label>
            <input
              required
              type="text"
              className="input input-primary text-lg input-md w-full"
              name="ocupation"
              value={updateUser.ocupation}
              onChange={(e) => handleInputChange(e)}
            />

            <label className={`${styles.adminTitle} w-full text-left`}>
              Cursos
            </label>
            <div className=" w-full grid  grid-cols-1 md:grid-cols-4">
              {availableCourses.map((course) => (
                <div key={course} className="flex items-center justify-start">
                  <input
                    type="checkbox"
                    id={course}
                    name={course}
                    checked={updateUser.courses.includes(course)}
                    onChange={() => handleCourseChange(course)}
                  />
                  <label className="ml-2 py-1 " htmlFor={course}>
                    {course}
                  </label>
                </div>
              ))}
            </div>
            <button className={`${styles.button} mt-6`}>
              Actualizar Usuario
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfilePanel;
