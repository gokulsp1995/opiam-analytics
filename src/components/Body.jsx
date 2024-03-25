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
            <h2 className={`${isVisible ? 'slide-in-from-left' : ''}`}>Digital First for the Construction Industry</h2>

            <h3 className={`${isVisible ? 'slide-in-from-right' : ''}`}>Data Analytics</h3>
            <container><p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Dive deep into the heart of your project's data to uncover actionable insights and foresights. Our connected <b>series of performance dashboards</b> provide real-time visibility to critical project metrics, enabling you to identify performance gaps, predict potential delays, optimize costs effectively.</p>
            </container>

            <h3 className={`${isVisible ? 'slide-in-from-right' : ''}`}>Workflow Automation</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Create a seamless and efficient workflow across functions with scheduled notifications, triggers and events to create a flow.
</p>
            </container>

            <h3 className={` ${isVisible ? 'slide-in-from-right' : ''}`}>Generative AI</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>AI Assistants, agents and generative AI can provide on-demand analytics, information and sharing of tasks, further driving productivity of the organisation.</p>
            </container>
        </div>
    )
}
export default Body;