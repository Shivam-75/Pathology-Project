import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const [menu, setmenu] = useState("home");
  const navigate = useNavigate();
  const bloodTest = [
    "Haemogolobin",
    "ESR",
    "EBO",
    "Bi.sugar F-PPR",
    "Bilirubin",
    "LFT",
    "G.T.T",
    "BUN",
    "Alk.Phosphatase",
    "Creatinie",
    "SGPT",
    "VDRL",
    "H.I.V.I && II",
    "Urea",
    "MP",
    "HSB Ag",
    "Elisa for TB",
    "Elisa forvPregnancy",
    "Urin",
    "Seman Example",
    "Uric acid",
    "CRP",
    "RBC Counl",
    "RBC Blood Group",
    "Aso Titre",
    "Montoux",
    "PCV",
    "BT",
    "CT",
    "PT",
    "PTT",
    "Platelet Count",
    "Albumin",
    "Globulln",
    "A/G Ratio",
    "Sodium",
    "Potassium",
    "Chlorides",
    "Calcium",
    "S.A mylase",
    "S.Lipase",
    "CPK",
    "CPK-MB",
    "Widal",
    "GBP",
    "R.A Factor",
  ];


  //?toast 
 const tt = {
   position: "top-right",
   autoClose: 1000,
   hideProgressBar: false,
   closeOnClick: false,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "dark",
 };

  const [deases, setdesease] = useState([]);

  //todo------ set token in localhost

  const [tokenData, setTokenData] = useState(localStorage.getItem("token"));

  const LoggdIn = !!tokenData;

  const setToken = (token) => {
    setTokenData(token);
    return localStorage.setItem("token", token);
  };

  //todo logout====

  const Logout = () => {
    setTokenData("");
    return localStorage.removeItem("token");
  };

  const [advance, setadvance] = useState([]);

  const normaalService = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/user/normaltest");

      const data = await res.json();
      if (res.ok) {
        setdesease(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const advanceService = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/user/advanced");

      const data = await res.json();
      if (res.ok) {
        setadvance(data.data);
      }
      else {
        return;
      }
    } catch (err) {
      return console.log(err);
    }
  };

  const AuthorizedOrdnot = `Bearer ${tokenData}` || null;
  const [admin, setadmin] = useState();

  const AdminorNot = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/admin/admin", {
        method: "GET",
        headers: {
          Authorization: AuthorizedOrdnot,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setadmin(data);
      } else {
        setadmin(false);
        return;
      }
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    advanceService();
    normaalService();
  }, []);

  //? id store hoga yadi user name pe click krega to patient id

  const [userId, setUserId] = useState("");

  useEffect(() => {
    AdminorNot();
  }, [tokenData]);
  const [data, setdata] = useState({
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



  

  //? ye date se data jo serch hoga yha save hoga
  const [dateseracg, setdataserach] = useState([]);


  return (
    <StoreContext.Provider
      value={{
        bloodTest,
        menu,
        setToken,
        setmenu,
        deases,
        advance,
        data,
        setdata,
        LoggdIn,
        Logout,
        admin,
        AuthorizedOrdnot,
        setdataserach,
        dateseracg,
        setUserId,
        userId,
        tt,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const storeShop = useContext(StoreContext);
  if (!storeShop) {
    throw new Error("oute side the context");
  }
  return storeShop;
};
