import React, { useState } from "react";
import "../../css/formBilling.css";
import { useStore } from "../../store/StoreContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FormBilling = () => {
  const { tt } = useStore();
  const { AuthorizedOrdnot } = useStore();
  const { bloodTest } = useStore();
  const navigate = useNavigate();

  //? storing in the store
  const { data, setdata } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitdata = async (e) => {
    e.preventDefault();

    const cash = parseFloat(data.cashAmount) || 0;
    const gpay = parseFloat(data.gPayAmount) || 0;
    const discountPercent = parseFloat(data.discount) || 0;

    const totalmoney = cash + gpay;
    const finalAmount = totalmoney - (totalmoney * discountPercent) / 100;

    const updatedData = {
      ...data,
      totalAmount: finalAmount,
    };

    setdata(updatedData);

    try {
      const res = await fetch("http://localhost:9000/api/admin/billinform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthorizedOrdnot,
        },
        body: JSON.stringify(updatedData),
      });
      const dt = await res.json();
      if (res.ok) {
        toast.success(dt.message, tt);
        
        navigate("/billpdf");

      } else {
        setdata({
          name: "",
          age: "",
          referedBy: "",
          date: "",
          gender: "",
          test: "",
          cashAmount: "",
          gPayAmount: "",
          discount: "",
          paidAmount: "",
          mobile: "",
          totalAmount: "",
        });
        toast.error(dt.message, tt);
      }
    } catch (err) {
      toast.error("Server Error ", tt);
    }
  };

  return (
    <form className="form-billing-outer" onSubmit={submitdata}>
      <div className="form-billing-inner-card">
        <h1>Billing</h1>
        <div className="form-billing-upper-header">
          <div className="form-billing-header-left">
            <input
              name="name"
              value={data.name}
              type="text"
              placeholder="Enter Patient Name"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              name="age"
              value={data.age}
              type="number"
              placeholder="Enter Patient Age"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <select
              name="referedBy"
              value={data.referedBy}
              onChange={handleChange}
              required>
              <option value="" hidden>
                Refered By
              </option>
              <option value="Self">Self</option>
              <option value="Doctor">Doctor</option>
            </select>
            <input
              name="mobile"
              value={data.mobile}
              type="number"
              placeholder="Mobile No"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              name="cashAmount"
              value={data.cashAmount}
              type="number"
              placeholder="Cash Amount"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              name="gPayAmount"
              value={data.gPayAmount}
              type="number"
              placeholder="G-Pay Amount"
              autoComplete="off"
              onChange={handleChange}
              // required
            />
          </div>
          <div className="form-billing-header-right">
            <input
              name="date"
              value={data.date}
              type="date"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <select
              name="gender"
              value={data.gender}
              onChange={handleChange}
              required>
              <option value="" hidden>
                gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <select
              name="test"
              value={data.test}
              onChange={handleChange}
              required>
              <option hidden>Service Name</option>
              {bloodTest.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              name="discount"
              value={data.discount}
              type="number"
              placeholder="Discount %"
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              name="paidAmount"
              value={data.paidAmount}
              type="number"
              placeholder="Paid Amount"
              onChange={handleChange}
              required
              autoComplete="off"
            />

            <p>{` Total Ammount  : ${
              +data.cashAmount +
              +data.gPayAmount -
              ((+data.cashAmount + +data.gPayAmount) * data.discount) / 100
            } ₹`}</p>
            <p>{` Discount  : ${
              ((+data.cashAmount + +data.gPayAmount) * data.discount) / 100
            } ₹`}</p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default FormBilling;
