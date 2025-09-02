import { useState } from "react";
import "../../css/loginpop.css";
import { assets } from "../../../public/frontend_assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import LoadingSmall from "../smallloading/LoadingSmall.jsx";
const Login = () => {
  const { tt } = useStore();
  const [loader, setloader] = useState(false);

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
    setloader(true);
    try {
      const res = await fetch("http://localhost:9000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
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
        setloader(false);
      } else {
        setLogins({ email: "", password: "" });
        toast.error(data.message, tt);
        setloader(false);
      }
    } catch (err) {
      toast.error("Server Error", tt);
      setloader(false);
    }
  };

  return (
    <>
      {" "}
      {loader ? (
        <div className="shivasssloading">
          {" "}
          <LoadingSmall />{" "}
        </div>
      ) : (
        ""
      )}
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
          <p className="register-p">
            I have Account
            <span
              onClick={() => {
                navigate("/signup");
              }}
              type="submit">
              signup?
            </span>
          </p>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
