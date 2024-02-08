import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  return <div className="mt-60">EditUser {id}</div>;
};

export default EditUser;
