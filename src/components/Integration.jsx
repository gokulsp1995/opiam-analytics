import React from "react";
import "./styling/Integration.scss";
import image1 from "../images/person.jpg";
import image2 from "../images/tab.jpg";

const Integration = () => {
    return (
        <div className="integration">
            <h1>Seamless Integration</h1>
            <img src={image1} alt="image1" className="first"/>
            <img src={image2} alt="image2" className="second"/>
            <p>Our solutions will work with your<br/> existing systems to create more value</p>
        </div>
    )
}
export default Integration;
