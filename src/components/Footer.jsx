import React, { useState, useEffect, useRef} from "react";
import "./styling/Footer.scss";

import soc1 from "../images/soc1.jpg"; 
import soc2 from "../images/soc2.jpg";
import soc3 from "../images/soc3.jpg";
import logo from "../images/logo.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
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
        <footer ref={headerRef} className={`footer ${isVisible ? 'animate' : ''}`}>
            <div className="container1">
                <div className="footer-content">
                    <div className="left-content">
                        <h2 className="heading typewriter-text">Schedule a <br/>Demo</h2>
                        {/* <img src={logo} alt="logo" /> */}
                        <button>Book a Demo</button>
                    </div>
                        <div className="right-content">
                            <div className="address-content">
                                <p>Opiam Analytics, Panampilly Nagar, <br />Cochin, Kerala, India  <br />+91736682079</p>
                                <a href="www.opiamanalytics.com">www.opiamanalytics.com</a>
                            </div>
                            <div className="social-icons">
                                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                                <FontAwesomeIcon icon={faFacebook} className="icon"/>
                                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;