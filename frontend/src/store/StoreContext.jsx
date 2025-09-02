import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const StoreContext = createContext(null);
export const StoreContextProvider = ({ children }) => {
  const [menu, setmenu] = useState("home");
  const navigate = useNavigate();
  const bloodTest = [
    "Homeoglobin",
    "Ultrasound",
    "CBC ",
    "BI.sugar F-PPR",
    "RBC Count",
    "LFT",
    "KFT",
    "SGOT",
    "BUN",
    "Alk. Phosphatase",
    "Creatinie",
    "SGPT",
    "H.I.V.I. & II",
    "Thyroid",
    "LH",
    "FSH",
    "Elisa for TB",
    "Elisa for pregnancy",
    "Urine",
    "Semen Examination",
    "Uric Acid",
    "LFT",
    "RBC Couni",
    "Blood group",
    "S Hipse",
    "Montoux",
    "PCV",
    "BT",
    "CT",
    "PT",
    "PTT",
    "Platelate count",
    "Albumin",
    "Globullan",
    "A/G Ratio",
    "Sodium",
    "Potassium",
    "Cloride",
    "Calcium",
    "S.A. Mylese",
    "CPK",
    "CPK-MB",
    "Widal",
    "GBP",
    "R.A. Factor",
    "X-RAY Chest",
    "X-RAY shoulder",
    "X-RAY (L.S)",
    "USG (Abdomin)",
    "USU (Fetus)",
    "USU (Small Parts)",
    "Hepatihs B",
    "Hepatihs C",
    "TFT",
    "TSH",
    "X-RAY MUG",
    "X-RAY (Barium)",
    "X-RAY (fishologram)",
    "X-RAY IVP",
    "X-RAY HSG",
    "Uria",
    "MP",
    "HBS Ag",
    "HBAIC",
    "CRP",
    "ESR",
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
    "TB PLATINUM(TB GOLD)",
    "CA 125",
    "CA 19.9",
    "C1 15.5",
    "TRIPLE MARKERS",
    "AMH",
    "HBAIC",
    "INSULIN",
    "PSA TOTAL",
    "PSA FREE",
    "HLAB 27",
    "VITAMIN D",
    "VITAMIN B12",
    "ANTICPP",
    "CBC+GBP",
    "PUS RM",
    "RA ASO CRP EACH",
    "LUPUS ANTICOGULANT",
    "LIPASE",
    "AMAYLASE",
    "TB PCR",
    "HBV DNA VIRAL LOAD PCR",
    "HCV RNAPCR",
    "HBSAG(ELISA)",
    "HIV ELISA",
    "ANTI CARDIOLIPIN ",
    "ANTI PHOSHOLIPID",
    "ADA",
    "TOTAL IGE LEVEL",
    "PAP SMEAR",
    "HISTOPATHOLOGY(SMALL/ MIDIUM/LARGE)",
    "CULTURE & SENSTIVITY",
    "BLOOD CS",
    "TYPHIDOT",
    "FOLIC ACID",
    "CEA",
    "ALFA FETO PROTEIN",
    "IRON PROFILE",
    "BONE MARROW",
    "CPK",
    "CPK MB",
    "BETA HCG",
    "FREE BETA SCG",
    "TROPNIN T",
    "TROPNIN I ",
    "VIT D3 LAVEL",
    "SPUTUM GENXAPERT",
    "ALLEGRY PROFILE",
    "D DIMMER",
    "IL-6",
    "PROCALCITIONIN",
    "ANTI TPO",
    "HB ELECTTOPHOROSIS",
    "PROTIN ELECTROPHOROSIS",
    "ANTI DS DNA",
    "NT PRO BNP",
    "SERUM AMONIA",
    "SEUMN COPPER",
    "URINE COPPER",
    "BICARBONATE",
    "BRUCELLA IGG 1GM",
    "CEROPLASMIN",
    "DENGU IGG",
    "TTG IGA",
    "CROMPOSOME",
    "TRIPLE MARKERS",
    "DUAL MARKER",
    "QUAD PARKER",
    "ASCITIC,PURAL,CSF,RM",
    "LDH",
    "ALLEGRY PROFILE",
    "DRUG OF ABUSE",
    "FACTOR 8",
    "FACTOR 9 ",
    "PT INR",
    "APTT",
    "BETA 2 GLYCOPROTIN",
    "HIV WESTERN BLOT",
    "CD 3 CD 4 CD 5",
    "HIV VIRAL LOAD",
    "MTB CULTURE (1 WEAK)",
    "MTB CULTURE (15 DAY)",
    "MTB CULTURE (1 MONTH)",
    "ALCOHAL LEVEL",
    "APLA PROFILE",
    "D2 HORMONE PROFILE",
    "H.S 1.1",
    "H.S 1.2",
    "H.S 1.3",
    "H.S 1.7",
    "ARTHERITIES PROFILE(MINI)",
    "ARTHERITIES PROFILE(MAXI)",
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
      const res = await fetch("http://localhost:9000/api/user/normaltest/");

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
      const res = await fetch("http://localhost:9000/api/user/advanced/");

      const data = await res.json();
      if (res.ok) {
        setadvance(data.data);
      } else {
        return;
      }
    } catch (err) {
      return console.log(err);
    }
  };

  //?patient data loading manage state
  const [loadingDetailsPatent, setlaodingPatent] = useState(false);
  const AuthorizedOrdnot = `Bearer ${tokenData}` || null;
  const [admin, setadmin] = useState();

  const [adminLoading, setadminLoadig] = useState(false);
  const AdminorNot = async () => {
    setadminLoadig(true);
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
        setadminLoadig(false);

        console.log("ssss", data);
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

  //docotr dataas
  const [dtname, setdtname] = useState([]);

  //? id store hoga yadi user name pe click krega to patient id

  const [userId, setUserId] = useState("");

  useEffect(() => {
    AdminorNot();
  }, [tokenData]);

  const [data, setdata] = useState();
  useEffect(() => {
    const docotrsdata = async () => {
      try {
        const responser = await fetch(
          "http://localhost:9000/api/admin/admin/doctordata",
          {
            method: "GET",
            headers: {
              Authorization: AuthorizedOrdnot,
            },
          }
        );
        const datas = await responser.json();
        if (responser.ok) {
          setdtname(datas.data);
        }
      } catch (err) {
        console.log("server error ");
      }
    };
    docotrsdata();
  }, []);

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
        loadingDetailsPatent,
        Logout,
        admin,
        AuthorizedOrdnot,
        setdataserach,
        dateseracg,
        setUserId,
        userId,
        adminLoading,
        dtname,
        setdtname,
        setlaodingPatent,
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
