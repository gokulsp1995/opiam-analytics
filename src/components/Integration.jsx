import React, { useState, useEffect, useRef} from "react";
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
        <div ref={headerRef} className={`integration ${isVisible ? 'animate' : ''}`}>
            <h1 className="typewriter-text">Seamless <br/> Integration</h1>
            <img src={image1} alt="image1" className="first slide-in-from-left"/>
            <img src={image2} alt="image2" className="second slide-in-from-right"/>
            <p className="">Our solutions will work with your existing systems to create more value</p>
        </div>
    )
}
export default Integration;
