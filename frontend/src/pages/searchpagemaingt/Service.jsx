import React, { useState } from "react";
import "../../css/service.css";
import { Outlet, useNavigate } from "react-router-dom";
const Service = () => {
  const navigate = useNavigate();
  return (
    <div className="service">
      <h1>Pathology Tests</h1>
      <div className="serive-button-navigator">
        <button className="btn" onClick={() => {navigate("/Service/shivam")}}>
          Normal Test
        </button>
        <button className="btn" onClick={()=>{navigate("/Service/advance");}}>Advance test</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Service;
