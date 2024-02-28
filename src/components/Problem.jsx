import React from "react";
import "./styling/Problem.scss";
import image7 from "../images/7.jpg"
import image8 from "../images/8.jpg"
import image9 from "../images/9.jpg"

const Problem = () => {
    return (
        <div className="problem">
            <h1>Tell us your problem, we probably already have a solution for you</h1>
            <div className="problem-div">
                <div>
                    <img src={image7} alt="image7" width="300px"/>
                    <h2>Materials Not Reaching Site on time?</h2>
                    <p>Procurement schedules are not aligned with Real-Time Schedules</p>
                </div>
                <div>
                    <img src={image8} alt="image8" width="300px"/>
                    <h2>No formal Reporting?</h2>
                    <p>We provide a conversational agent to report data into your existing systems</p>
                </div>
                <div>
                    <img src={image9} alt="image9" width="300px"/>
                    <h2>Going over budget?</h2>
                    <p>Visibility into cashflow, and cost analysis as the project progresses in real-time</p>
                </div>
            </div>
            <div className="problem-div-resp">
                <div>
                    <img src={image7} alt="image7" width="300px"/>
                    
                </div>
                <div>
                    <img src={image8} alt="image8" width="300px"/>
                    
                </div>
                <div>
                    <img src={image9} alt="image9" width="300px"/>
                    
                </div>
                    <h2>Materials Not Reaching Site on time?</h2>
                    <p>Procurement schedules are not aligned with Real-Time Schedules</p>

                    <h2>No formal Reporting?</h2>
                    <p>We provide a conversational agent to report data into your existing systems</p>

                    <h2>Going over budget?</h2>
                    <p>Visibility into cashflow, and cost analysis as the project progresses in real-time</p>
            </div>
        </div>
    );
};

export default Problem;
