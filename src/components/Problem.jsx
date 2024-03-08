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
            <h1 className="typewriter-text">Tell us your problem, we <br/> probably already have a solution<br/> for you</h1>
            <div className="problem-div">
                <div>
                    <img src={image7} alt="image7" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">Materials Not Reaching Site on time?</h2>
                    <p>Procurement schedules are not aligned with Real-Time Schedules</p>
                </div>
                <div>
                    <img src={image8} alt="image8" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">No formal Reporting?</h2>
                    <p>We provide a conversational agent to report data into your existing systems</p>
                </div>
                <div>
                    <img src={image9} alt="image9" width="320px" className="popup-text"/>
                    <h2 className="fade-in-out">Going over budget?</h2>
                    <p>Visibility into cashflow, and cost analysis as the project progresses in real-time</p>
                </div>
            </div>
            <div className="problem-div-resp">
                <div>
                    <img src={image7} alt="image7" width="300px" className="popup-text"/>
                    
                </div>
                <div>
                    <img src={image8} alt="image8" width="300px" className="popup-text"/>
                    
                </div>
                <div>
                    <img src={image9} alt="image9" width="300px" className="popup-text"/>
                    
                </div>
                    <h2 className="fade-in-out">Materials Not Reaching Site on time?</h2>
                    <p>Procurement schedules are not aligned with Real-Time Schedules</p>

                    <h2 className="fade-in-out">No formal Reporting?</h2>
                    <p>We provide a conversational agent to report data into your existing systems</p>

                    <h2 className="fade-in-out">Going over budget?</h2>
                    <p>Visibility into cashflow, and cost analysis as the project progresses in real-time</p>
            </div>
        </div>
    );
};

export default Problem;
