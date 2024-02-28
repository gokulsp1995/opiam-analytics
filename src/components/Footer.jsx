import React from "react";
import "./styling/Footer.scss";

import soc1 from "../images/soc1.jpg"; 
import soc2 from "../images/soc2.jpg";
import soc3 from "../images/soc3.jpg";
import logo from "../images/logo.jpg";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container1">
                <div className="footer-content">
                    <div className="left-content">
                        <h2 className="heading typewriter-text">Schedule a Demo</h2>
                        <img src={logo} alt="logo" />
                    </div>
                        <div className="right-content">
                            <div className="address-content">
                                <p>123 Anywhere St., Any City, ST 12345 123 <br />123-456-7890</p>
                                <a href="www.opiamanalytics.com">www.opiamanalytics.com</a>
                            </div>
                            <div className="social-icons">
                                <img src={soc1} alt="Social Media 1" />
                                <img src={soc2} alt="Social Media 2" />
                                <img src={soc3} alt="Social Media 3" />
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;