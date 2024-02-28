import React from "react";
import "./styling/Header.scss";
import image1 from "../images/1.jpg";
import logo from "../images/logo.jpg";



const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                {/* <img src={logo} alt="Company Logo" className="logo" /> */}
                
            </div>
            <div className="name-image">
                <div className="content-container">
                    {/* <h1 className="company-name">OPIAM <br/> ANALYTICS</h1> */}
                    <h2 className="main-heading">Data Analytics <br/> and AI for the Construction <br/> Industry</h2>
                    <h3 className="sub-heading">Make Data-Driven Decisions</h3>
                    <p className="contact-info">SCHEDULE A CALL</p>
                </div>
                <img src={image1} alt="Header Image" className="header-image" width="700px"/>
            </div>
        </header>
    );
}
export default Header;