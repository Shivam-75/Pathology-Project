import React from "react";
import "../../css/footer.css";
import { assets } from "../../../public/frontend_assets/assets";
const Fotter = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="fotter-content-left">
          <h1>PATHOLOGY</h1>
          <p>
            © 2025{" "}
            <strong>
              {" "}
              Perfect diagnostic and ultrasound centre partawal bajar
              maharajganj
            </strong>
            . All rights reserved. We are committed to delivering accurate,
            timely, and affordable diagnostic services. From basic health
            screenings to advanced pathology tests, our goal is to support
            healthier communities with precision and care.
          </p>
          <div className="fotter-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>PATHOLOGY </h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Research</li>
            <li>Pivacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUGH</h2>
          <ul>
            <li>+91 9616434212</li>
            <li>+91 9838104111</li>
            <li>thanos.spider01@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 0 Pathology.com - All right reserver
      </p>
    </div>
  );
};

export default Fotter;
