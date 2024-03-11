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
            <container><p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Dive deep into the heart of your project's data to uncover actionable insights and foresights. Our interconnected <b>series of performance dashboards</b> provide real-time visibility critical project metrics, enabling you identify gaps, predict potential delays, optimize costs effectively.</p>
            </container>

            <h3 className={`${isVisible ? 'slide-in-from-right' : ''}`}>Generative AI</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>From enhancing project scheduling and estimation to providing advanced analytics real-time problem-solving, our Generative AI tools are designed adapt learn from your organization's unique execution patterns, ensuring continuous improvement innovation.</p>
            </container>

            <h3 className={` ${isVisible ? 'slide-in-from-right' : ''}`}>AI Process Automation</h3>
            <container>
                <p className={`popup-text ${isVisible ? 'slide-in-from-left' : ''}`}>Our functional AI assistant and automated procurement system transform the way you manage projects by automating routine tasks, optimizing resource allocation, ensuring timely material procurement. </p>
            </container>
        </div>
    )
}
export default Body;