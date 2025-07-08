import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
    const role = false

  if (role !== true) {
    return <Navigate to="/login" />; 
  }

  return <Outlet />;
};

export default AdminRoute;
