import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "@/components/adminPanel/RegisterUser";
import SearchOrCreate from "@/components/adminPanel/SearchOrCreate";
import EditUser from "@/components/adminPanel/EditUser";
import AllUsers from "@/components/adminPanel/AllUsers";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col items-center absolute w-full   bg-yellow-500   z-50 ">
      <div className=" bg-red-500 h-32 fixed flex items-center justify-between w-full md:px-24 px-6   ">
        <NavLink to="enrollment-user">
          <div>Matricular Usuario</div>
        </NavLink>
        <NavLink to="all-users">
          <div>Todos los Inscritos</div>
        </NavLink>
        <NavLink to="/">
          <div>Salir Admin Panel</div>
        </NavLink>
      </div>
      <div className="w-full md:px-20 px-6   ">
        <div className="w-full bg-green-500 mt-40 mb-20  ">
          <Routes>
            <Route path="register-user" element={<RegisterUser />} />
            <Route path="enrollment-user" element={<SearchOrCreate />} />
            <Route path="/" element={<AllUsers />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="edit-user/:id" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
