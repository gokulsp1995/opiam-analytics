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
        <div>
            <h1 className="slide-in-from-right">Get with the <br /> times, leverage <br />technology</h1>
            <a href="">SERVICES</a>
        </div>
    </div>
    
  );
}
export default Services;