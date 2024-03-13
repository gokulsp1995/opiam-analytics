import React, { useState, useEffect, useRef} from "react";
import "./styling/Problem.scss";
import image7 from "../images/7.jpg"
import image8 from "../images/8.jpg"
import image9 from "../images/9.jpg"

const Problem = () => {
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
        <div ref={headerRef} className={`problem ${isVisible ? 'animate' : ''}`}>
            <h1 className="typewriter-text">Our Solutions Can Solve Your Problems</h1>
            <div className="problem-div">
                <div>
                    <img src={image7} alt="image7" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">Ensure <span>timely delivery of materials</span> with Opiam’s Automated Procurement System which ensures that your project is always on track</h2>
                    
                </div>
                <div>
                    <img src={image8} alt="image8" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">Use <span>Opiam’s Conversational AI agent</span> to generate report on-the-go from your existing technology infrastructure</h2>
                </div>
                <div>
                    <img src={image9} alt="image9" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">Gain <span>insights into cash flow and cost analysis</span> and prevent project from going over-budget</h2>
                </div>
            </div>
            <div className="problem-div-resp">
                <div>
                    <img src={image7} alt="image7" width="300px" className="popup-text"/>
                    <h2 className="fade-in-out">Ensure <span>timely delivery of materials</span> with Opiam’s Automated Procurement System which ensures that your project is always on track</h2>
                </div>
                <div>
                    <img src={image8} alt="image8" width="300px" className="popup-text"/>
                    <h2 className="fade-in-out">Use <span>Opiam’s Conversational AI agent</span> to generate report on-the-go from your existing technology infrastructure</h2>
                </div>
                <div>
                    <img src={image9} alt="image9" width="300px" className="popup-text"/>
                    <h2 className="fade-in-out">Gain <span>insights into cash flow and cost analysis</span> and prevent project from going over-budget</h2>
                </div>
                

                

                
            </div>
        </div>
    );
};

export default Problem;
