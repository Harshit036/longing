import React from "react";
import "./Courses.css";
import Picture from "../../assets/image 10.png";
import logo from "../../assets/Icon1.svg";

function Courses() {
  return (
    <div className="Courses" id="coursesSection">
      <div className="coursesHeading">Courses</div>
      <div className="coursesContent">
        <p>
          Learn to trade or invest in the stock market in just 30 days by
          dedicating 1 hour/day only.
        </p>
      </div>
      <div className="coursesList">
        <div className="course">
          <div className="courseImage">
            <img src={Picture} alt="" />
          </div>
          <h1 className="courseName">Trading Grandmaster</h1>
          <div className="coursePoints">
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Interactive doubt sessions</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Lifetime mentor Support</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Live Classes and Q/A Sessions</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Learn from scratch</h1>
            </div>
          </div>
          <div className="courseLinks">
            <a href="https://forms.gle/iRnRaEbNvYkxDs3W8" target="blank">
              Enroll Now
            </a>
            <a
              href="https://drive.google.com/file/d/1-ww8irdTI3Nm0lZ0SPll4vCXiweAO4dE/view"
              target="blank"
            >
              Brochure
            </a>
          </div>
        </div>
        <div className="course">
          <div className="courseImage">
            <img src={Picture} alt="" />
          </div>
          <h1 className="courseName">Intra-day Grandmaster</h1>
          <div className="coursePoints">
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Interactive doubt sessions</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Lifetime mentor Support</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Live Classes and Q/A Sessions</h1>
            </div>
            <div className="eachPoint">
              <img src={logo} alt="" />
              <h1 className="pointText">Advanced Technical Analysis</h1>
            </div>
          </div>
          <div className="courseLinks">
            <a href="https://forms.gle/iRnRaEbNvYkxDs3W8" target="blank">
              Enroll Now
            </a>
            {/* <a href="/">Brochure</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
