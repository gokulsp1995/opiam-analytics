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
            <h2 className="red-header">The Power to change</h2>
            <h3 className="leverage slide-in-from-right">The power to change comes from knowledge and expertise. Opiam Analytics has deep domain knowledge of the industry, along with expert skills in these technologies to understand where and how to deploy these technologies for a digital transformation of your organisation.</h3>
            {/* <a href="">SERVICES</a> */}
            <button className="contact-button">Contact Us</button>
        </div>
    </div>
    
  );
}
export default Services;