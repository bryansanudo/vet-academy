import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "@/components/admin/RegisterUser";
import SearchOrCreate from "@/components/admin/SearchOrCreate";
import EditUser from "@/components/admin/EditUser";
import AllUsers from "@/components/admin/AllUsers";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div className="pt-24 md:pt-0 md:grid md:grid-cols-5 h-screen mt-20">
      <div className="md:mt-24 bg-red-500 cols-span-1 ">
        <h3 className="text-blue-500">Navegacion Admin</h3>
        {/* <NavLink to="register-user">
          <div>Registrar Usuario</div>
        </NavLink> */}
        <NavLink to="search-user">
          <div>Buscar Usuario</div>
        </NavLink>
        <NavLink to="all-users">
          <div>Todos los usuarios</div>
        </NavLink>
      </div>
      <div className="col-span-4">
        <Routes>
          <Route path="register-user" element={<RegisterUser />} />
          <Route path="search-user" element={<SearchOrCreate />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
