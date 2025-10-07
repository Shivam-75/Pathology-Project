import React from "react";
import "../../css/search.css";
import { useStore } from "../../store/StoreContext.jsx";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const Serach = () => {
  const { AuthorizedOrdnot, setlaodingPatent, setdataserach, tt } = useStore();
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
    setlaodingPatent(true);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/admin/adminbillingdata?date=${datess}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
            Authorization: AuthorizedOrdnot,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setdataserach(data.data);
        toast.success(data.message, tt);
        setdatess("");
      } else {
        toast.success(data.message, tt);
      }
    } catch (err) {
      toast.success("Server Error", tt);
    } finally {
      setlaodingPatent(false);
    }
  };

  return (
    <div className="Search">
      <form method="post" onSubmit={clickhandel} className="search-inputs">
        <label for="date">Select a date</label>
        <input
          name="date"
          onChange={changlehandle}
          value={datess}
          type="date"
          required
          id="date"
        />
        <button type="submit">Search</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Serach;
