import { useState } from "react";
import "../../css/loginpop.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify"
import { useStore } from "../../store/StoreContext";
const Loginpop = () => {
  const navigate = useNavigate();
  const{tt} = useStore()
  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changehandle = (e) => {
    const { name, value } = e.target;
    setregister((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const clickhandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(register),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("res the data", data);
        toast.success(data.message,tt)
        setregister({ name: "", email: "", password: "" });
        setTimeout(() => {
          navigate("/login");
        },1500)
      } else {
        toast.error(data.message, tt);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={clickhandle} className="login-poup-container">
        <div className="login-poup-title">
          <h2>Registration</h2>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-poup-inputs">
          <input
            value={register.name}
            type="text"
            onChange={changehandle}
            name="name"
            placeholder="Your Name "
            required
          />
          <input
            value={register.email}
            type="email"
            onChange={changehandle}
            name="email"
            placeholder="Your Email "
            required
          />
          <input
            value={register.password}
            type="password"
            onChange={changehandle}
            name="password"
            placeholder="Your Password "
            required
          />
        </div>
        <button type="submit">Registration</button>
        <p className="register-p">
          I have Account
          <span
            onClick={() => {
              navigate("/login");
            }}
            type="submit">Login?</span>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Loginpop;
