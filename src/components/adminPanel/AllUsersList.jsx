import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "@/configFirebase";
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
  return (
    <>
      {users.length === 0 ? (
        /*  <div className="h-screen">Cargando...</div> */
        <LoaderAdmin />
      ) : (
        <>
          <table className="w-full md:mt-[90px] text-sm ">
            <thead className="">
              <tr className="h-20">
                <th className="shadow-md shadow-primary rounded-xl">Correo</th>
                <th className="shadow-md shadow-primary rounded-xl">Nombre</th>
                <th className="shadow-md shadow-primary rounded-xl">Cursos</th>
                <th className="shadow-md shadow-primary rounded-xl">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user, index) => {
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
