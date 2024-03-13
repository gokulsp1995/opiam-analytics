import React, { useEffect, useState, useRef } from "react";
import "./styling/Header.scss";
import image1 from "../images/1.jpg";
import logo from "../images/logo.jpg";


const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // observer.unobserve(entry.target);
                }
                else {
                    setIsVisible(false); // Reset isVisible state when element goes out of view
                }
            });
        });

        observer.observe(headerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header ref={headerRef} className="header">
            {/* {`header ${isVisible ? 'animate' : ''}`} */}
            <div className="logo-container">
                <img src={logo} alt="Company Logo" className="logo" />
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <a href="service.html" class="nav-item nav-link">Service</a>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
            </div>
            <div className="name-image">
                <div className="content-container">
                    <h2 className="main-heading">Data Analytics and AI <br /> for the Construction <br /> Industry</h2>
                    <h3 className="sub-heading">Make Data-Driven <br /> Decisions</h3>
                    <p className="contact-info">SCHEDULE A CALL</p>
                </div>
                <img src={image1} alt="Header Image" className="header-image" width="690px" />
            </div>
        </header>
    );
}
export default Header;