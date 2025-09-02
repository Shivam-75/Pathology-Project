import React, { useState } from "react";
import "../../css/machineimg.css";

import { useStore } from "../../store/StoreContext.jsx";
const Machineimg = ({ pathologyMachineimgs }) => {
  return (
    <>
     
      <div className="machine-flex-outer-box">
        {pathologyMachineimgs.map((item, index) => {
          return (
            <div key={index} className="machine">
              <div className="machine-img">
                <img src={item.imgs} alt="" />
              </div>
              <div className="machine-img-content">
                <h1>{item.tittle}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Machineimg;
