import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";

import Fotter from "./components/footer/Fotter.jsx";
import { useState } from "react";
import Content from "./pages/search/SearchBar.jsx";
import Signup from "./pages/Signup/signup.jsx";
import Appointment from "./pages/Apointment/Appointment.jsx";
import Service from "./pages/services/Service.jsx";
import Billing from "./pages/Billing/Billing.jsx";
import Error from "./components/error/Error.jsx";
import { useStore } from "./store/StoreContext.jsx";
import Tests from "./components/tests/Tests.jsx";
import Billpdf from "./components/billpdf/Billpdf.jsx";
import Login from "./components/loginpop/Login.jsx";
import AdminRoute from "./components/admin/Admin.jsx";
import DoctorSearch from "./components/doctorSearcch/doctorSearch.jsx";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Fotter />
    </>
  );
};

export default App;
