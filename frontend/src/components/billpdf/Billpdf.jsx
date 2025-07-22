import React from "react";
import "../../css/billpdf.css";
import { useStore } from "../../store/StoreContext";
import { ToastContainer,toast } from "react-toastify";
function Billpdf() {
  const { data, userId,tt } = useStore();

  const aa = !!userId;

  return (
    <div className="billpdf">
      <div className="billpdf-card-container">
        <h2>
          Perfect diagnostic and ultrasound centre partawal bajar maharajganj
        </h2>
        <div className="billing-name">
          <div className="bullpdf-contnent-p">
            <p>
              <strong>Name : </strong>
              {aa ? userId[0].name : data.name}
            </p>
            <p>
              <strong>Date : </strong>
              {aa ? userId[0].date : data.date}{" "}
            </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>
              <strong>Age : </strong>
              {aa ? userId[0].age : data.age}
            </p>
            <p>
              <strong>Gender : </strong>
              {aa ? userId[0].gender : data.gender}
            </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>
              <strong>Refered By : </strong>
              {aa ? userId[0].referedBy : data.referedBy}
            </p>
            <p>
              <strong>Test Name : </strong>
              {aa ? userId[0].test : data.test}
            </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>
              <strong>Mobile No : </strong>
              {aa ? userId[0].mobile : data.mobile}
            </p>
            <p>
              <strong>Discount Amount : </strong>
              {aa ? userId[0].discount : data.discount}%
            </p>
          </div>
        </div>
        <div className="bullpdf-contnent-p-amount">
          <div className="bullpdf-contnent-p">
            <p>
              <strong> Cash Amount : </strong>
              {aa ? userId[0].cashAmount : data.cashAmount} ₹{" "}
            </p>
            <p>
              <strong>G-pay Amount : </strong>
              {aa ? userId[0].gPayAmount : data.gPayAmount} ₹
            </p>
          </div>
          <div className="bullpdf-contnent-p">
            <p>
              <strong>Paid Amount :</strong>{" "}
              {aa ? userId[0].paidAmount : data.paidAmount} ₹
            </p>
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
