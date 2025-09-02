import React, { useState } from "react";
import "../../css/doctordt.css";
import { useStore } from "../../store/StoreContext.jsx";
import LoadingSmall from "../smallloading/LoadingSmall.jsx";
import { ToastContainer, toast } from "react-toastify";

const DoctorSearch = () => {
  const { tt, AuthorizedOrdnot } = useStore();
  const [doctoresdt, setdocotordt] = useState();
  const [docotrdatadt, setdoctordatadt] = useState([]);
  const [doctorAmount, setDoctorAmount] = useState(0);
  const [loader, setloader] = useState(false);

  //todo use for faching the docotor list data;
  const { dtname } = useStore();
  let uniqueData = new Set([]);
  dtname.map((itms, index) => {
    uniqueData.add(itms.referedBy);
  });

  const DoctoreSerachData = async (e) => {
    e.preventDefault();

    try {
      setloader(true);
      const response = await fetch(
        `http://localhost:9000/api/admin/admin/doctordata/dts/${doctoresdt}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizedOrdnot,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setdoctordatadt(data.findDetails);
        setloader(false);
        setDoctorAmount(data.totalPaid);
        toast.success(data.message, tt);
      } else {
        toast.error(data.message, tt);
      }
    } catch (err) {
      console.log("Doctor Search Data Faild to Fatched : " + err);
    }
  };
  console.log(doctorAmount);
  return (
    <>
      {loader ? (
        <div className="lading-docotr">
          <LoadingSmall size={50} />
        </div>
      ) : (
        ""
      )}
      <div className="doctorserch">
        <form onSubmit={DoctoreSerachData} className="doctoreinputs">
          <input
            list="data"
            onChange={(e) => setdocotordt(e.target.value)}
            placeholder="Enter Doctor name"
            required
          />
          {/* <datalist id="data">
            {uniqueData?.referedBy?.map((datass, index) => {
              console.log(datass)
              return (
                 <option key={index} value={datass}></option>
               )
            })}
          </datalist> */}
          <div className="doctor-delx">
            <button type="submit" className="doctor-data-btn">
              Submit
            </button>
            <h2
              onClick={() => {
                window.print();
              }}
              className="doctor-data-btn amount-dt">
              Download
            </h2>
          </div>
        </form>
        {/* docotres data and show */}

        <div className="user-table">
          <h1 className="">Doctor Details</h1>
          <h1 >Total Amount: {doctorAmount}</h1>

          <table className="user-tables-data">
            <thead>
              <tr>
                <th className="crth">Name</th>
                <th className="crth">Date</th>
                <th className="crth">Refered by</th>
                <th className="crth"> Amount</th>
              </tr>
            </thead>
            <tbody>
              {docotrdatadt?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      getdatass(item._id);
                    }}
                    className="crtr usertable-item-tr">
                    <td className="usertable-item-tr">{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.referedBy}</td>
                    <td>{item.paidAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default DoctorSearch;
