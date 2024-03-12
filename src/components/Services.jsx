import React, { useState, useEffect, useRef} from "react";

 import "./styling/Services.scss";
 import image6 from "../images/6.jpg";

 const Services = () => {
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
        
    <div ref={headerRef} className={`services ${isVisible ? 'animate' : ''}`}>
        <img src={image6} alt="image6" className="popup-text"/>
        <div className="text-right">
            <h1 className="red-header">Know More About Us</h1>
            <h1 className="leverage slide-in-from-right">Leverage our technology expertise <br /> and our 4 decade of domain <br />expertise to provide you with<br />holistic solutions</h1>
            {/* <a href="">SERVICES</a> */}
            <button className="contact-button">Contact Us</button>
        </div>
    </div>
    
  );
}
export default Services;