import React from "react";
import "../../css/tests.css";
import { NavLink } from "react-router-dom";
import { useStore } from "../../store/StoreContext";

const Tests = ({ items }) => {
  const { setmenu } = useStore();

  
  return (
    <div className="container">
      {items.map((data, index) => {
        return (
          <div key={index} className="test-card">
            <h2>{data?.name}</h2>
            {data.description === undefined ? (
              ""
            ) : (
              <div className="test-info">
                <strong>Description:</strong> {data.description}
              </div>
            )}
            <div className="test-info">
              <strong>Sample Type:</strong>{" "}
              {data?.bloodsample || data?.sampleType}
            </div>
            <div className="test-info">
              <strong>Reporting Time:</strong>{" "}
              {data?.reporttime || data?.reportTime}
            </div>
            <div className="test-info">
              <strong>Price:</strong> {data?.lab_rate || data?.price} ₹
            </div>
            <NavLink to={"/Appointment"} className="btn" onClick={() => {
              setmenu("")
            }}>
              Book Now
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Tests;
