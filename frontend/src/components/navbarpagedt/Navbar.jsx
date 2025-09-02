import React, { useState } from "react";
import "../../css/navbar.css";
import { assets } from "../../../public/frontend_assets/assets.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext.jsx";
import Curtime from "../timepagedt/time.jsx";
import LoadingSmall from "../smallloading/LoadingSmall.jsx";
const Navbar = ({ setshowlogin }) => {
  const { menu, setmenu, LoggdIn, Logout, adminLoading, admin } = useStore();
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  console.log(admin);
  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          <Curtime />
        </h1>
        <ul className="navbar-menu">
          <NavLink
            to={"/"}
            onClick={() => setmenu("home")}
            className={menu === "home" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink
            to={"/Service"}
            onClick={() => setmenu("Services")}
            className={menu === "Services" ? "active" : ""}>
            Tests
          </NavLink>
          {/* admin?.isAdmin */}
          {LoggdIn && admin ? (
            <NavLink
              to={"Billing"}
              onClick={() => setmenu("Billing")}
              className={menu === "Billing" ? "active" : ""}>
              Billing
            </NavLink>
          ) : (
            ""
          )}
          {LoggdIn && admin ? (
            <NavLink
              to={"doctordata"}
              onClick={() => setmenu("doctordata")}
              className={menu === "doctordata" ? "active" : ""}>
              Doctor
            </NavLink>
          ) : (
            <NavLink
              to={"/Appointment"}
              onClick={() => setmenu("Appointment")}
              className={menu === "Appointment" ? "active" : ""}>
              Appointment
            </NavLink>
          )}
          {!LoggdIn ? (
            ""
          ) : !admin && adminLoading ? (
            <div className="admin-laoding-detail">
              {" "}
              <LoadingSmall size={30} />{" "}
            </div>
          ) : (
            ""
          )}
        </ul>
        <div className="navbar-right">
          {/* LoggdIn */}
          {LoggdIn && admin ? (
            <img
              onClick={() => {
                navigate("/userdata"), setmenu("img");
              }}
              src={assets.search_icon}
              alt=""
              className={menu === "img" ? "active" : ""}
            />
          ) : (
            ""
          )}
          {LoggdIn ? (
            <button
              onClick={() => {
                setshowlogin(false);
                navigate("/signup");
                setmenu("");
                Logout();
              }}>
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setshowlogin(true);
                navigate("/login");
                setmenu("");
              }}>
              sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
