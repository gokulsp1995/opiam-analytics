import React, { useState, useEffect, useRef } from "react";

import "./styling/Body.scss"


const Body = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
                // else {
                //     setIsVisible(false); // Reset isVisible state when element goes out of view
                // }
            });
        });
    
        observer.observe(headerRef.current);
    
        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <div 
        ref={headerRef} 
        className={`body ${isVisible ? 'animate' : ''}`} 
        >
            <h1 className="slide-in-from-left">Digital First for the Construction Industry</h1>

            <h3 className="slide-in-from-right animate-on-scroll">Data Analytics</h3>
            <container><p className="popup-text">Dive deep into the heart of your project's data to uncover actionable insights and foresights. Our interconnected <b>series of performance dashboards</b> provide real-time visibility critical project metrics, enabling you identify gaps, predict potential delays, optimize costs effectively.</p>
            </container>

            <h3 className="slide-in-from-left animate-on-scroll">Generative AI</h3>
            <container>
                <p className="popup-text animate-on-scroll">From enhancing project scheduling and estimation to providing advanced analytics real-time problem-solving, our Generative AI tools are designed adapt learn from your organization's unique execution patterns, ensuring continuous improvement innovation.</p>
            </container>

            <h3 className="slide-in-from-right animate-on-scroll">AI Process Automation</h3>
            <container>
                <p className="popup-text animate-on-scroll">Our functional AI assistant and automated procurement system transform the way you manage projects by automating routine tasks, optimizing resource allocation, ensuring timely material procurement. </p>
            </container>
        </div>
    )
}
export default Body;