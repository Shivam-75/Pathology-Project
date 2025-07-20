import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../store/StoreContext";

const AdminRoute = () => {
  const { admin } = useStore();
  console.log(admin);

  if (admin?.isAdmin !== true) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AdminRoute;
