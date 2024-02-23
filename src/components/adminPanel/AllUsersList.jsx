import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "@/configFirebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import LoaderAdmin from "@/components/LoaderAdmin";
import { deleteObject, ref } from "firebase/storage";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "@/components/Loader";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { STORE_USERS, selectUsers } from "@/redux/slice/userSlice";
import useFetchCollection from "@/customHooks/useFetchCollection";
import { FaUserDoctor } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import styles from "@/style";

const AllUsersList = () => {
  const { data, isLoading } = useFetchCollection("users");
  const users = useSelector(selectUsers);
  const [filter, setFilter] = useState(""); // Estado para manejar el filtro seleccionado
  const [search, setSearch] = useState(""); // Estado para manejar el término de búsqueda

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_USERS({
        users: data,
      })
    );
  }, [dispatch, data]);

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Borrar Usuario!!!",
      "Se eliminara toda la información del usuario",
      "Borrar",
      "Cancelar",
      function okCb() {
        deleteUser(id);
      },
      function cancelCb() {
        console.log("Borrado Cancelado");
      },
      {
        width: "400px",
        borderRadius: "4px",
        titleColor: "#1E73BE",
        okButtonBackground: "#F80013",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));

      toast.success("Usuario eliminado con exito de la base de datos");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Lista de cursos disponibles para filtrar
  const courses = [
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

  // Función para manejar el cambio de filtro
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Función para manejar el cambio de término de búsqueda
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      {users.length === 0 ? (
        <LoaderAdmin />
      ) : (
        <>
          <div className="flex justify-center gap-20 mb-4">
            {/* Lista desplegable (select) para seleccionar el filtro */}
            <div>
              <label
                htmlFor="filter"
                className="block text-sm font-medium text-black"
              >
                Filtrar por curso:
              </label>
              <select
                id="filter"
                name="filter"
                className="shadow-sm shadow-primary rounded-xl p-2 mt-2"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="">Todos los cursos</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            {/* Input de búsqueda para filtrar por nombre o correo */}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Buscar por nombre o correo:
              </label>
              <input
                type="text"
                id="search"
                name="search"
                className="shadow-sm shadow-primary rounded-xl p-2 mt-2"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <table className="w-full md:mt-[90px] text-sm ">
            <thead className="">
              <tr className="h-20">
                <th className="shadow-md shadow-primary rounded-xl">#</th>
                <th className="shadow-md shadow-primary rounded-xl">Correo</th>
                <th className="shadow-md shadow-primary rounded-xl">Nombre</th>
                <th className="shadow-md shadow-primary rounded-xl">Cursos</th>
                <th className="shadow-md shadow-primary rounded-xl">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="">
              {users
                .filter(
                  (user) =>
                    (filter === "" || user.courses.includes(filter)) &&
                    (search === "" ||
                      user.email.toLowerCase().includes(search.toLowerCase()) ||
                      user.name.toLowerCase().includes(search.toLowerCase()))
                )
                .map((user, index) => {
                  const {
                    email,
                    name,
                    phone,
                    country,
                    city,
                    ocupation,
                    courses,
                  } = user;
                  return (
                    <tr key={email} className="text-center   border-b-2">
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{email}</td>
                      <td className="text-center ">{name}</td>
                      <td className="text-center ">{courses.join(", ")}</td>
                      <td>
                        <div className="flex items-center justify-center gap-4">
                          <Link to={`/admin/edit-user/${email}`}>
                            <div className={`${styles.button} gap-2`}>
                              Editar
                              <FaEdit className="text-2xl " />
                            </div>
                          </Link>
                          <div
                            onClick={() => confirmDelete(email)}
                            className={`${styles.button} gap-2 cursor-pointer`}
                          >
                            Borrar
                            <FaTrashAlt className="cursor-pointer text-2xl " />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AllUsersList;
