import { useState } from "react";
import "../../css/loginpop.css";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext";
import { ToastContainer,toast } from "react-toastify";
const Login = () => {
  const {tt} =useStore();
  const { setToken } = useStore();
  const navigate = useNavigate();
  const [Logins, setLogins] = useState({
    email: "",
    password: "",
  });

  const changehandle = (e) => {
    const { name, value } = e.target;
    setLogins((pre) => ({
      ...pre,
      [name]: value,
    }));
  };


  const clickhandle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(Logins),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.Token);
        setLogins({ email: "", password: "" });
        toast.success(data.message, tt);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(data.message, tt);
        console.log(data);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={clickhandle} className="login-poup-container">
        <div className="login-poup-title">
          <h2>Login</h2>
          <img
            onClick={() => {
              navigate(-1);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-poup-inputs">
          <input
            value={Logins.email}
            type="email"
            onChange={changehandle}
            name="email"
            placeholder="Your Email "
            required
          />
          <input
            value={Logins.password}
            type="password"
            onChange={changehandle}
            name="password"
            placeholder="Your Password "
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
