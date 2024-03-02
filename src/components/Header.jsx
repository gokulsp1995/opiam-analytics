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
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(headerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header ref={headerRef} className={`header ${isVisible ? 'animate' : ''}`}>
            <div className="name-image">
                <div className="content-container">
                    <div className="logo-container">
                        <img src={logo} alt="Company Logo" className="logo" />
                    </div>
                    <h2 className="main-heading popup-text">Data Analytics and AI for the Construction Industry</h2>
                    <h3 className="sub-heading typewriter-text">Make Data-Driven Decisions</h3>
                    <p className="contact-info">SCHEDULE A CALL</p>
                </div>
                <img src={image1} alt="Header Image" className="header-image popup-text" width="700px" />
            </div>
        </header>
    );
}
export default Header;