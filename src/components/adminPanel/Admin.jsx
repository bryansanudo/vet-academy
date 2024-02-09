import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "@/components/adminPanel/RegisterUser";
import SearchOrCreate from "@/components/adminPanel/SearchOrCreate";
import EditUser from "@/components/adminPanel/EditUser";
import AllUsers from "@/components/adminPanel/AllUsers";
import { NavLink } from "react-router-dom";
import { GrPowerShutdown } from "react-icons/gr";
import styles from "@/style";
import { FaUsers } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { BsPersonAdd } from "react-icons/bs";

const Admin = () => {
  return (
    <div className="flex flex-col items-center absolute w-full   bg-gray-100   z-50 ">
      <div className=" bg-gray-400 h-20   fixed flex items-center justify-between z-50 w-full md:px-24 px-6  ">
        <NavLink to="/">
          <div className="flex flex-col items-center justify-center hover:scale-110 duration-500 text-black ">
            <GrPowerShutdown className="text-2xl" />
            Salir
          </div>
        </NavLink>
        <div className="bg-white h-10 w-[1px]"></div>
        <NavLink to="all-users">
          <div className="flex flex-col items-center justify-center hover:scale-110 duration-500 text-black">
            <PiUsersThreeLight className="text-2xl" />
            Inscritos
          </div>
        </NavLink>
        <div className="bg-white h-10 w-[1px]"></div>
        <NavLink to="enrollment-user">
          <div className="flex flex-col items-center justify-center hover:scale-110 duration-500 text-black ">
            <BsPersonAdd className="text-2xl" />
            Matricular
          </div>
        </NavLink>
      </div>
      <div className="w-full md:px-20 px-6   ">
        <div className="w-full  mt-40 mb-20  ">
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
