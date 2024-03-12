import React, { useState, useEffect, useRef } from "react";
import "./styling/Integration.scss";
import image1 from "../images/person.jpg";
import image2 from "../images/tab.jpg";

const Integration = () => {

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
        <div ref={headerRef} className="integration">
            {/* {`integration ${isVisible ? 'animate' : ''}`} */}
            <div className="header-para">
                <h1 className="">Build AI and Analytics into <br /> your existing systems  </h1>
                <p className="">Your business problems, solutions and possibilities are all there in your organizational data. All you need is AI and Analytics.</p>
                <p>Our technology experts will develop custom and off the box solutions to suit your organizations requirements, giving you a single source of truth for all your challenges.</p>
            </div>
            <div className="container-img">
                <img src={image1} alt="image1" className={`first ${isVisible ? 'slide-in-from-left' : ''}`} />
                <img src={image2} alt="image2" className={`second ${isVisible ? 'slide-in-from-right' : ''}`} />
            </div>
        </div>
    )
}
export default Integration;
