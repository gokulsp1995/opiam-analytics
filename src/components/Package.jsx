import React from "react";
import "./styling/Package.scss"

const Package = () => {
    return (
    <div className="package">
        <div className="package-text">
            <h1>Our Packages</h1>
            <h3>Choose from our affordable and customizable packages.</h3>
        </div>
        <div className="three-para">
            <div>
                <h1>Foundation</h1>
                <ul>
                    <li>Basic package</li>
                    <li>Pre-Built Analytical Dashboards</li>
                </ul>
            </div>
            <div>
                <h1>Solution</h1>
                <ul>
                    <li>Targeted package</li>
                    <li>Pre-Built Analytical Dashboards</li>
                    <li>Functional AI Agent</li>
                </ul>
            </div>
            <div>
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