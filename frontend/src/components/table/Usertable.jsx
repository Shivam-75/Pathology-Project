import React, { useEffect } from "react";
import "../../css/usertable.css";
import {useNavigate} from "react-router-dom"
import { useStore } from "../../store/StoreContext";
const Usertable = () => {
  const { dateseracg, setUserId } = useStore();
  const navi = useNavigate();
  const getdatass = (id) => {
    const result = dateseracg?.filter((element) => {
      return element._id === id;
    });
    setUserId(result);
    navi("/billpdf");

  };

  return (
    <div className="user-table">
      <h1 className="">Patient data</h1>
      <table className="user-tables-data">
        <thead>
          <tr>
            <th className="crth">Name</th>
            <th className="crth">Number</th>
            <th className="crth">Date</th>
            <th className="crth">Refered by</th>
            <th className="crth">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {dateseracg?.map((item,index) => {
            return (
              <tr key={index}
                onClick={(e) => {
                  getdatass(item._id);
                }}
                className="crtr usertable-item-tr">
                <td className="usertable-item-tr">{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.date}</td>
                <td>{item.referedBy}</td>
                <td>{item.totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Usertable;
