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

const AllUsers = () => {
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
      "Delete User!!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCb() {
        deleteUser(id);
      },
      function cancelCb() {
        console.log("Delete Canceleded");
      },
      {
        width: "320px",
        borderRadius: "4px",
        titleColor: "orangered",
        okButtonBackground: "orangeRed",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));

      toast.success("product deleted successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <h2 className="flex items-center  justify-center mb-6">titulo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {users.map((user, index) => {
              const { email, name, title, courses } = user;

              return (
                <div
                  key={email}
                  className="flex flex-col items-center justify-between shadow-sm shadow-black rounded-xl  pt-4   "
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="">{email}</div>
                    <div className="flex items-center justify-center p-2 bg-primary  mask mask-circle ">
                      <FaUserDoctor className="text-2xl text-white" />
                    </div>
                  </div>
                  <div className=" flex items-center justify-center flex-col mt-4">
                    <div className="text-lg">{name}</div>
                    {/* <div className="  text-md ">{title}</div> */}
                  </div>

                  <div className="shadow-sm shadow-gray-400 p-1 rounded-lg my-4">
                    <div>
                      {courses.map((course, i) => (
                        <div key={i} className="flex items-center">
                          <GoDot />
                          <div>{course}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 py-4">
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
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default AllUsers;
