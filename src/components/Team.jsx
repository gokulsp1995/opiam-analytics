import React, { useState, useEffect, useRef } from "react";
import "./styling/Team.scss";
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"


const Team = () => {
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
    <div ref={headerRef} className={`team ${isVisible ? 'animate' : ''}`}>
      <div className="team-text">
        <h2 className="enhance">It's time for <br /> Transformation</h2>
        <h4 className="fade-in-out">Organisations worldover are deploying AI and Analytics, leading to a new way of managing businesses. While companies improve performance, profitability and on time deliveries with the new found knowledge they replace organisations with conventional systems from the market, similar to the industrial revolution.</h4>
        {/* <h4 className="gray-h4 fade-in-out">Together, we work to embed next-generation technologies into your business, ensuring a smooth transition and immediate value addition without overhauling your existing infrastructure.</h4> */}
      </div>
      <div className="team-img">
        <img src={image3} alt="image3" className="popup-text fst" />
        <img src={image4} alt="image4" className="popup-text snd" />
        <img src={image5} alt="image5" className="popup-text trd" />
      </div>
    </div>
  );
}
export default Team;