import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

import Fotter from "./components/footer/Fotter";
import { useState } from "react";
import Content from "./pages/search/SearchBar";
import Signup from "./pages/Signup/signup";
import Appointment from "./pages/Apointment/Appointment";
import Service from "./pages/services/Service";
import Billing from "./pages/Billing/Billing";
import Error from "./components/error/Error";
import { useStore } from "./store/StoreContext";
import Tests from "./components/tests/Tests";
import Billpdf from "./components/billpdf/Billpdf";
import Login from "./components/loginpop/Login";
import AdminRoute from "./components/admin/Admin";
import DoctorSearch from "./components/doctorSearcch/doctorSearch";

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
