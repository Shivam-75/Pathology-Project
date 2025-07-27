import "../../css/header.css";
import { assets } from "../../../public/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/StoreContext";
const Header = () => {
  const { LoggdIn, Logout } = useStore();
  const navigate = useNavigate();
  return (
    <>
      <div className="header-front">
        <div className="header-front-content">
          <div className="scroll-text">
            perfect diagnostic and ultrasound centre partawal bajar maharajganj
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-left">
          <div className="header-content">
            <h1>Our Pathology Services – Best of the Best</h1>{" "}
            <p>
              <strong>24/7 Online Report Access: </strong> Get secure access to
              your pathology test reports anytime, anywhere through our
              user-friendly online portal.
            </p>
            <p>
              <strong>Accurate & Timely Diagnostics:</strong> Our lab is
              equipped with state-of-the-art technology to deliver precise and
              quick results, ensuring timely diagnosis and treatment planning.
            </p>
            <p>
              <strong>Expert Pathologists:</strong> Your tests are reviewed by
              certified and experienced pathologists ensuring accuracy,
              reliability, and expert interpretation.
            </p>
            {LoggdIn ? (
              <button
                className="btn"
                onClick={() => {
                  Logout();
                  navigate("/signup");
                }}>
                Logout
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  navigate("/signup");
                }}>
                Registration{" "}
              </button>
            )}
          </div>
        </div>
        <div className="header-right">
          <div className="header-img">
            <img src={assets.doctor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
