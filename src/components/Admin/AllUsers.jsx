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
        <div className=" mt-60">
          {users.map((user, index) => {
            const { email, name, title, courses } = user;
            return (
              <div key={email} className="flex flex-col my-10  ">
                <div className=" border-black bg-blue-500 w-[400px]   ">
                  <div>{email}</div>
                  <div>{name}</div>
                  <div>{title}</div>
                  <Link to={`/admin/edit-user/${email}`}>
                    <FaEdit className="text-2xl text-green-500" />
                  </Link>
                  <FaTrashAlt
                    onClick={() => confirmDelete(email)}
                    className="cursor-pointer text-2xl text-red-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllUsers;
