import React, { useEffect, useState } from "react";
import "../../css/formBilling.css";
import { useStore } from "../../store/StoreContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingSmall from "../smallloading/LoadingSmall";

const FormBilling = () => {
  const { tt, dtname, setdtname, AuthorizedOrdnot, bloodTest } = useStore();
  const [loadingBilling, setloadingBilling] = useState(false);
  const navigate = useNavigate();
  let uniqueData = new Set();
  dtname.map((itms, index) => {
    uniqueData.add(itms.referedBy);
  });

  const [submitdataform, setsubmitdataform] = useState({
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

  //!datched doctor data

  //? storing in the store
  const { data, setdata } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setsubmitdataform((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitdata = async (e) => {
    setloadingBilling(true);

    e.preventDefault();

    const cash = parseFloat(submitdataform.cashAmount) || 0;
    const gpay = parseFloat(submitdataform.gPayAmount) || 0;
    const discountPercent = parseFloat(submitdataform.discount) || 0;

    const totalmoney = cash + gpay;
    const finalAmount = totalmoney - (totalmoney * discountPercent) / 100;

    const updatedData = {
      ...submitdataform,
      totalAmount: finalAmount,
    };

    setsubmitdataform(updatedData);
    setdata(submitdataform);

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
        setloadingBilling(false);

        setsubmitdataform({
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
        navigate("/billpdf");
      } else {
        setsubmitdataform({
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
        setloadingBilling(false);

        toast.error(dt.message, tt);
      }
    } catch (err) {
      toast.error("Server Error ", tt);
      setloadingBilling(false);
    }
  };
  return (
    <>
      {" "}
      {loadingBilling ? (
        <div className="form-billing-laoding">
          {" "}
          <LoadingSmall size={75} />{" "}
        </div>
      ) : (
        ""
      )}
      <form className="form-billing-outer" onSubmit={submitdata}>
        <div className="form-billing-inner-card">
          <h1>Billing</h1>
          <div className="form-billing-upper-header">
            <div className="form-billing-header-left">
              <input
                name="name"
                value={submitdataform.name}
                type="text"
                placeholder="Enter Patient Name"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                name="age"
                value={submitdataform.age}
                type="number"
                placeholder="Enter Patient Age"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                list="data"
                value={submitdataform.referedBy}
                name="referedBy"
                onChange={handleChange}
                placeholder="Enter Doctor name"
              />
              <datalist id="data">
                {uniqueData?.referedBy?.map((datass, index) => (
                  <option value={datass}></option>
                ))}
              </datalist>
              <input
                name="mobile"
                value={submitdataform.mobile}
                type="number"
                placeholder="Mobile No"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                name="cashAmount"
                value={submitdataform.cashAmount}
                type="number"
                placeholder="Cash Amount Pay"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                name="discount"
                value={submitdataform.discount}
                type="number"
                placeholder="Discount %"
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="form-billing-header-right">
              <input
                name="date"
                value={submitdataform.date}
                type="date"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <select
                name="gender"
                value={submitdataform.gender}
                onChange={handleChange}
                required>
                <option value="" hidden>
                  gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                list="datacheckup"
                name="test"
                onChange={handleChange}
                placeholder="Enter Checkup Name"
                value={submitdataform.test}
                required
              />
              <datalist id="datacheckup">
                {bloodTest.map((item, index) => (
                  <option value={item} key={index}></option>
                ))}
              </datalist>
              <input
                name="gPayAmount"
                value={submitdataform.gPayAmount}
                type="number"
                placeholder="Online Amount Pay"
                autoComplete="off"
                onChange={handleChange}
                // required
              />
              <input
                name="paidAmount"
                value={submitdataform.paidAmount}
                type="number"
                placeholder="Total Paid Amount"
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <p>{` Total Ammount  : ${
                +submitdataform.cashAmount +
                +submitdataform.gPayAmount -
                ((+submitdataform.cashAmount + +submitdataform.gPayAmount) *
                  submitdataform.discount) /
                  100
              } ₹`}</p>
              <p>{` Discount  : ${
                ((+submitdataform.cashAmount + +submitdataform.gPayAmount) *
                  submitdataform.discount) /
                100
              } ₹`}</p>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default FormBilling;
