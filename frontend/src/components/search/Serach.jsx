import React from "react";
import "../../css/search.css";
import { useStore } from "../../store/StoreContext";
import { useState } from "react";
import { toast ,ToastContainer } from "react-toastify";
const Serach = () => {
  const { AuthorizedOrdnot, setdataserach,tt } = useStore();
  const [datess, setdatess] = useState("");

  const clickhandel = (e) => {
    e.preventDefault();
    SeratchingUserData();
  };
  const changlehandle = (e) => {
    const { value } = e.target;
    // const change = value.replace(/-/g, "/");
    setdatess(value);
  };
  const SeratchingUserData = async () => {
    try {
      const res = await fetch(
        `http://localhost:9000/api/admin/adminbillingdata?date=${datess}`,
        {
          method: "GET",
          headers: {
            "Content-Type":"Application/json",
            Authorization: AuthorizedOrdnot,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setdataserach(data.data);
        toast.success(data.message, tt);
      } else {
        toast.success(data.message, tt);
      }
    } catch (err) {
      toast.success("Server Error", tt);

    }
  };

  return (
    <div className="Search">
      <form method="post" onSubmit={clickhandel} className="search-inputs">
        <input name="date" onChange={changlehandle} type="date" required />
        <button type="submit">Search</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Serach;
