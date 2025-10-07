import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStore } from "../../store/StoreContext";

const AdminRoute = () => {
  const { admin } = useStore();
  const location = useLocation();

  if (admin?.isAdmin !== true) {
    // return  || <Navigate to="/signup" />;

    if (location.pathname === "/") {
      return <Navigate to="/" />;
    } else if (location.pathname === "/signup") {
      return <Navigate to="/signup" />;
    }
  }
  return <Outlet />;
};

export default AdminRoute;
