import { createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const [menu, setmenu] = useState("home");
  const navigate = useNavigate();
  const bloodTest = [
    "T3 T4 TSH",
    "TSH",
    "FT3 FT4 TSH",
    "LH FSH PRL",
    "LH FSH PRL EACH",
    "TESTESTRON",
    "PROGESTERON",
    "E2",
    "TORCH 5 PANEL",
    "TORCH 10 PANEL",
    "TB PLATINUM (TB GOLD)",
    "CA 125",
    "CA 19.9",
    "C1 15.3",
    "TRIPLE MARKER",
    "AMH",
    "HBA1C",
    "INSULIN",
    "PSA TOTAL",
    "PSA FREE",
    "HLAB 27",
    "VITAMIND (TOTAL)",
    "VITAMIN B 12",
    "ANTICCP",
    "CBC+CRP",
    "PUS RM",
    "RA & ASO CRP EACH",
    "LUPUS ANTICOGLUANT",
    "LIPASE",
    "AMYLASE",
    "TB PCR",
    "HBV DNA VIRAL LOAD PCR",
    "HCV RNA PCR",
    "HBSAG (ELISA)",
    "HIV (ELISA)",
    "ANTICARDIOLIPIN (IGG OR IGM OR IgA)",
    "ANTIPHOSPHOLIPID (IGG OR IGM OR IgA)",
    "ADA",
    "TOTAL IGE LEVEL",
    "PAP SMEAR",
    "HISTOPATHOLOGY (SMALL / MEDIUM/LARGE)",
    "CULTURE & SENSITIVITY",
    "BLOOD CS",
    "TYPHOID",
    "FOLIC ACID",
    "CEA",
    "ALFA FETO PROTEIN (AFP)",
    "IRON PROFILE (IRON TIBC FERRITIN)",
    "BONE MARROW",
    "CPK",
    "CPK MB",
    "BETA HCG (ELISA)",
    "FREE BETA HCG",
    "TROPONIN T (ELISA)",
    "TROPONIN I (ELISA)",
    "VIT D 3 LEVEL",
    "SPUTUM GENEXPERT",
    "ALLERGY PROFILE",
    "D DIMER",
    "IL-6",
    "PROCALCITONIN",
    "ANTI TPO",
    "HB ELECTROPHOROSIS",
    "PROTINE ELECTROPHOROSIS",
    "ANTI DS DNA",
    "NT PRO BNP",
    "SERUM AMONIA",
    "SERUM COPPER",
    "URINE COPPER",
    "BICARBONATE",
    "BRUCELLA IGG IGM",
    "CEROPLASMIN",
    "DENGU IGG/IGM/NS1",
    "TTG IGA",
    "CROMOSOME",
    "TRIPLE MARKER",
    "DUAL MARKER",
    "QUAD PARKER",
    "ASCITIC,PURAL,CSF RM",
    "LDH",
    "ALLERGY PROFILE",
    "DRUG OF ABUSE",
    "FACTOR 8",
    "FACTOR 9",
    "PT INR",
    "APTT",
    "BETA 2 GLYCOPROTIEN",
    "HIV WESTERN BLOT",
    "CD 3 CD 4 CD 5",
    "HIV VIRAL LOAD",
    "MTB CULTURE (1 WEEK)",
    "MTB CULTURE (15 DAYS)",
    "MTB CULTURE (1 MONTH)",
    "ALCOHOL LEVEL",
    "ALPLA PROFILE",
    "D2 HORMONE PROFILE",
    "H.S. 1.1",
    "H.S. 1.2",
    "H.S. 1.3",
    "H.S. 1.7",
    "ARTERITITES PROFILE (MIN)",
    "ARTERITITES PROFILE (MAX)",
    "H.S. 1.1 LFT,KFT,LIPID,FT3,CBC,IRON PROFILE,URINE,RNI HBA1C",
    "H.S. 1.3 = VIT D3, VITB12",
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
        console.log(data);
      } else {
        setadmin(false);
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
