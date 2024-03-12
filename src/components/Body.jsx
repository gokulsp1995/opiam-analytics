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
        className="body"
        >
            {/* {`${isVisible ? 'slide-in-from-left' : ''}`}  */}
            {/* {`${isVisible ? 'slide-in-from-right' : ''}`}  */}
            <h1 className={`${isVisible ? 'slide-in-from-left' : ''}`}>Digital First for the Construction Industry</h1>

            <h3 className={`${isVisible ? 'slide-in-from-right' : ''}`}>Data Analytics</h3>
            <container><p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Dive deep into the heart of your project's data to uncover actionable insights and foresights. Our interconnected <b>series of performance dashboards</b> provide real-time visibility critical project metrics, enabling you identify performance gaps, predict potential delays, optimize costs effectively.</p>
            </container>

            <h3 className={`${isVisible ? 'slide-in-from-right' : ''}`}>Generative AI</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>From on-demand analytics to AI-driven processes, deploying generative AI assistants can enhance productivity and decision-making in organizations.</p>
            </container>

            <h3 className={` ${isVisible ? 'slide-in-from-right' : ''}`}>AI Process Automation</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Our capability to integrate applications and AI-driven processes across functions can create seamless workflows robust for your organisation. </p>
            </container>
        </div>
    )
}
export default Body;