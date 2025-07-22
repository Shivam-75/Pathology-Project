import React from "react";
import "../../css/header.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext";
const Header = () => {
  const { LoggdIn, Logout } = useStore();
  const navigate = useNavigate();
  return (
    <>
      <div className="header-front">
        <div className="header-front-content">
          <div className="scroll-text">
            perfect diagnostic and ultrasound centre partawal bajar maharajganj
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-left">
          <div className="header-content">
            <h1>Services Provided best of the best</h1>
            <p>
              24/7 Online Report Access Access all your reports anytime,
              anywhere via a secure online portal.
            </p>
            {LoggdIn ? (
              <button
                className="btn"
                onClick={() => {
                  Logout();
                  navigate("/signup");
                }}>
                Logout
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  navigate("/signup");
                }}>
                Registration{" "}
              </button>
            )}
          </div>
        </div>
        <div className="header-right">
          <div className="header-img">
            <img src={assets.doctor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
