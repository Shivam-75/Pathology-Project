import React, { useState } from "react";
import "../../css/navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext";
import { ToastContainer } from "react-toastify";
import Curtime from "../time/time";
const Navbar = ({ setshowlogin }) => {
  const { menu, setmenu, LoggdIn, Logout, admin } = useStore();
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1 className="logo"><Curtime/></h1>
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
            Services
          </NavLink>
          {LoggdIn && admin?.isAdmin ? (
            <NavLink
              to={"Billing"}
              onClick={() => setmenu("Billing")}
              className={menu === "Billing" ? "active" : ""}>
              Billing
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            to={"/Appointment"}
            onClick={() => setmenu("Appointment")}
            className={menu === "Appointment" ? "active" : ""}>
            Appointment
          </NavLink>
        </ul>
        <div className="navbar-right">
          {LoggdIn && admin?.isAdmin ? (
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
                navigate("/signup");
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
