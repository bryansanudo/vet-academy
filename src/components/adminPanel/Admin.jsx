import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "@/components/adminPanel/RegisterUser";
import SearchOrCreate from "@/components/adminPanel/SearchOrCreate";
import EditUser from "@/components/adminPanel/EditUser";
import AllUsers from "@/components/adminPanel/AllUsers";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="  bg-red-500 mt-60 w-[300px] ">
        <h3 className="text-blue-500 ">Navegacion Admin</h3>
        {/* <NavLink to="register-user">
          <div>Registrar Usuario</div>
        </NavLink> */}
        <NavLink to="enrollment-user">
          <div>Matricular Usuario</div>
        </NavLink>
        <NavLink to="all-users">
          <div>Todos los Inscritos</div>
        </NavLink>
      </div>
      <div className="w-full bg-green-500">
        <Routes>
          <Route path="register-user" element={<RegisterUser />} />
          <Route path="enrollment-user" element={<SearchOrCreate />} />
          <Route path="/" element={<AllUsers />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
