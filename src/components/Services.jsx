import React from "react";

 import "./styling/Services.scss";
 import image6 from "../images/6.jpg";

 const Services = () => {
    return (
        
    <div className="services">
        <img src={image6} alt="image6" className="popup-text"/>
        <div>
            <h1 className="slide-in-from-right">Get with the <br /> times, leverage <br />technology</h1>
            <a href="">SERVICES</a>
        </div>
    </div>
    
  );
}
export default Services;