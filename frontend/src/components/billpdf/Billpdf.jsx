import React from "react";
import "../../css/billpdf.css";
import { useStore } from "../../store/StoreContext";
import { ToastContainer,toast } from "react-toastify";
function Billpdf() {
  const { data, userId,tt } = useStore();

  // console.log("userId",!!userId)
  const aa = !!userId;

  return (
    <div className="billpdf">
      <div className="billpdf-card-container">
        <h2>
          perfect diagnostic and ultrasound centre partawal bajar maharajganj
        </h2>
        <div className="billing-name">
          <div className="bullpdf-contnent-p">
            <p>Name :{aa ? userId[0].name : data.name}</p>
            <p>Date :{aa ? userId[0].date : data.date} </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>age : {aa ? userId[0].age : data.age}</p>
            <p>Gender : {aa ? userId[0].gender : data.gender}</p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>Refered By : {aa ? userId[0].referedBy : data.referedBy}</p>
            <p>Test Name : {aa ? userId[0].test : data.test}</p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>Mobile No : {aa ? userId[0].mobile : data.mobile}</p>
            <p>Discount Amount : {aa ? userId[0].discount : data.discount}</p>
          </div>
        </div>
        <div className="bullpdf-contnent-p-amount">
          <div className="bullpdf-contnent-p">
            <p>
              Cash Amount : {aa ? userId[0].cashAmount : data.cashAmount} ₹{" "}
            </p>
            <p>
              Pay Able Amount : {aa ? userId[0].totalAmount : data.totalAmount}{" "}
              ₹
            </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>
              G-pay Amount : {aa ? userId[0].gPayAmount : data.gPayAmount} ₹
            </p>
            <p>Paid Amount : {aa ? userId[0].paidAmount : data.paidAmount} ₹</p>
          </div>
          <button
            className="billpdf-button"
            onClick={() => {
              window.print();
            }}>
            download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billpdf;
