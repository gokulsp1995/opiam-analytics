import React from "react";
import "./styling/Team.scss";
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"


const Team = () => {
    return (
    <div className="team">
      <div className="team-text">
            <h1>Enhance the Capability of your IT Team</h1>
            <h4>We collaborative with your IT teams,bringing together Business Analysts, DataScientists, Domain Experts, and Generative AI Specialists.</h4>
            <h4 className="gray-h4">Together, we work to embed next-generation technologies into yourbusiness, ensuring a smooth transitionand immediate value addition withoutoverhauling your existing infrastructure.</h4>
      </div>  
      <div className="team-img">
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
        <img src={image5} alt="image5" />
      </div>
    </div>
  );
}
export default Team;