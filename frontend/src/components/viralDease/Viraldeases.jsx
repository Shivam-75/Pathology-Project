import React from "react";
import "../../css/Viraldeases.css";
import { assets } from "../../../public/frontend_assets/assets";
import Tests from "../tests/Tests";
const Viraldeases = () => {
  return (
    <div className="viral-deasese">
      <div className="viraldease-header-img">
        <img src={assets.doctorss} alt="" />
        <div className="viraldease-header-content">
          <h1>Common Cold</h1>
          <p>
            Most viral diseases do not have a specific cure, but symptoms can be
            managed with medications. The bodys immune system plays a major role
            in fighting off the virus. In severe cases, medical attention is
            necessary. a microscopic organism that invades and multiplies inside
            the bodys cells. Viral infections can spread from person to person
            through direct contact, airborne particles, contaminated food or
            water, or insect bites.
          </p>
          <div className="prevention">
            <h2>How to Prevent Viral Diseases</h2>
            <li> Maintain Good Hygiene</li>
            <li> Get Vaccinated</li>
            <li>Avoid Close Contact with Sick People</li>
            <li> Boost Your Immune System</li>
          </div>
        </div>
      </div>
      <div className="virals-dease-bottom-imgs">
        <div className="vrl-content-p">
          <h1>Trusted Diagnostics. Accurate Results. Always.</h1>
          <p>
            Welcome to{" "}
            <strong>
              {" "}
              Perfect Diagnostic and Ultrasound Centre, Partawal Bazar,
              Maharajganj,
            </strong>
             your trusted partner in advanced medical diagnostics. We combine
            cutting-edge technology, certified professionals, and compassionate
            care to deliver accurate, timely, and reliable test results — every
            time. Whether it's a routine blood test or a specialized health
            checkup, our state-of-the-art facilities and doorstep sample
            collection services ensure a hassle-free experience for you and your
            loved ones.
          </p>
          <p>
            Experience the best of the best in pathology services — because your
            health deserves nothing less.
          </p>
        </div>
        <img src={assets.viraldease1} alt="" />

        {/* <img className="sg" src={assets.viraldease2} alt="" /> */}
      </div>
    </div>
  );
};

export default Viraldeases;
