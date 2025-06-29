import React from "react";
import "../../css/footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Fotter = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="fotter-content-left">
          <h1>pathology</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta,
            fuga aliquam dolor doloribus eos nesciunt tempore repellendus ullam
            voluptates at, quasi impedit, cupiditate officia odio cumque.
            Beatae, cumque laboriosam.
          </p>
          <div className="fotter-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Pathology</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Research</li>
            <li>Pivacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get IN TOUGH</h2>
          <ul>
            <li>+1-22-334-2344</li>
            <li>contact@gmail.com</li>
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
