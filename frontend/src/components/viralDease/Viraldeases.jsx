import React from "react";
import "../../css/Viraldeases.css";
import { assets } from "../../assets/frontend_assets/assets";
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
          <img src={assets.viraldease1} alt="" />
          <div className="vrl-content-p">
            <h1>this is my best website</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, quisquam officiis aliquid libero suscipit unde
              quos ad tenetur accusamus vero recusandae dignissimos! Dolorum,
              voluptate? Hic deserunt autem aperiam in fugit?
            </p>
          </div>
          <img className="sg" src={assets.viraldease2} alt="" />
      </div>
    </div>
  );
};

export default Viraldeases;
