import React, { useState, useEffect, useRef} from "react";
import "./styling/Package.scss"

const Package = () => {
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
        <div ref={headerRef} className="package">
         {/* {`package ${isVisible ? 'animate' : ''}`} */}
            <div className="package-text">
                <h1 className="typewriter-text">Our Packages</h1>
                <h3>Choose from our affordable and customizable packages.</h3>
            </div>
            <div className="three-para">
                <div className={`element1 ${isVisible ? 'rise-in' : ''}`}>
                    <h1>Foundation</h1>
                    <ul>
                        <li>Basic package</li>
                        <li>Pre-Built Analytical Dashboards</li>
                    </ul>
                </div>
                <div className={`element2 ${isVisible ? 'rise-in' : ''}`}>
                    <h1>Solution</h1>
                    <ul>
                        <li>Targeted package</li>
                        <li>Pre-Built Analytical Dashboards</li>
                        <li>Functional AI Agent</li>
                    </ul>
                </div>
                <div className={`element3 ${isVisible ? 'rise-in' : ''}`}>
                    <h1>Digit-All</h1>
                    <ul>
                        <li>Full package</li>
                        <li>Custom dashboards</li>
                        <li>Custom agents</li>
                        <li>Custom automation</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="quote">Get a Quote</h1>
            </div>
        </div>
    );
}
export default Package;