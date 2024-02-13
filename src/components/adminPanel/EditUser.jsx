import React, { useState, useEffect } from "react";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import styles from "@/style";
import { GoDot } from "react-icons/go";
import { FaUserDoctor } from "react-icons/fa6";
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

const EditUser = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    ocupation: "",
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
      setIsLoading(true);
      const response = await getUserData(id);
      setIsLoading(false);

      setUserData(response);
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
    setIsLoading(true);
    try {
      await setDoc(doc(db, "users", id), { ...userData });
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
      <div className=" flex flex-col-reverse  md:flex-row gap-6 w-full  pb-20 ">
        <div className="flex flex-col items-center justify-center    md:w-[50%]  ">
          <div
            key={userData.email}
            className="flex flex-col items-center justify-between shadow-sm h-full shadow-black rounded-xl  pt-4 p-6 w-full  "
          >
            <div className="flex items-center justify-center gap-4">
              <div className={`${styles.adminTitle}`}>{userData.email}</div>
              <div className="flex items-center justify-center p-2 bg-primary  mask mask-circle ">
                <FaUserDoctor className="text-2xl text-white" />
              </div>
            </div>
            <div className=" flex items-center justify-center flex-col mt-4">
              <div className={`${styles.adminTitle}`}>{userData.name}</div>
              <div className="text-lg">{userData.phone}</div>
              <div className="text-lg">{userData.country}</div>
              <div className="text-lg">{userData.city}</div>
              <div className="text-lg">{userData.ocupation}</div>
            </div>

            <div className="shadow-sm shadow-gray-400 p-1 rounded-lg my-4">
              <div>
                {userData.courses.map((course, i) => (
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
              value={userData.name}
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
              value={userData.phone}
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
              value={userData.country}
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
              value={userData.city}
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
              value={userData.ocupation}
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
                    checked={userData.courses.includes(course)}
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

export default EditUser;
