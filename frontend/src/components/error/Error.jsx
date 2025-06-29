import React, { useEffect } from "react";
import "../../css/error.css";
import { assets } from "../../assets/frontend_assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext.jsx";
const Error = () => {
  const navigater = useNavigate();
 
  return (
    <div className="error">
      <button className="btn" onClick={() => navigater("/")}>
        home
      </button>

      <div className="error-imgs">
        <img src={assets.error} alt="" />
      </div>
    </div>
  );
};

export default Error;
