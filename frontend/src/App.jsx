import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbarpagedt/Navbar.jsx";
import Home from "./pages/homepagedtmain/Home.jsx";

import Fotter from "./components/fotterpagedt/Fotter.jsx";
import { useState } from "react";
import Content from "./pages/searchpagemain/SearchBar.jsx";
import Signup from "./pages/searchsignuppage/signup.jsx";
import Appointment from "./pages/aponontmentpagedt/Appointment.jsx";
import Service from "./pages/searchpagemaingt/Service.jsx";
import Billing from "./pages/billingpagedtmain/Billing.jsx";
import Error from "./components/errorpages/Error.jsx";
import { useStore } from "./store/StoreContext.jsx";
import Tests from "./components/testpagedt/Tests.jsx";
import Billpdf from "./components/billingpdfdata/Billpdf.jsx";
import Login from "./components/loginpagedt/Login.jsx";
import AdminRoute from "./components/adminpanel/Admin.jsx";
import DoctorSearch from "./components/docotrsearchdt/doctorSearch.jsx";
import Loginpop from "./components/loginpagedt/registration.jsx";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  const { deases, advance } = useStore();

  return (
    <>
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route element={<AdminRoute />}>
            <Route path="/userdata" element={<Content />} />
            <Route path="/Billing" element={<Billing />} />
            <Route path="/billpdf" element={<Billpdf />} />
            <Route path="/doctordata" element={<DoctorSearch />} />
          </Route>
          <Route path="Service" element={<Service />}>
            <Route path="shivam" element={<Tests items={deases} />} />
            <Route path="advance" element={<Tests items={advance} />} />
          </Route>
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="*" element={<Error />} />
          <Route path="/signup" element={<Loginpop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Fotter />
    </>
  );
};

export default App;
