import React from "react";
import logo1 from "../../assets/Icon1.svg";
import logo2 from "../../assets/Icon2.svg";
import logo3 from "../../assets/Icon3.svg";
// import logo4 from "../../assets/Icon4.svg";
import Picture from "../../assets/Group 139.png";
import "./About.css";

function About() {
  return (
    <div className="About" id="aboutSection">
      <div className="aboutHeading">About Us</div>
      <div className="left">
        <div className="whitespace"></div>
        <div className="aboutContent">
          Longing is an initiative to help investors achieve financial freedom
          and success. We provide comprehensive courses for day trading and
          investment in the Indian stock markets across different segments such
          as cash, futures, and options. We are committed to helping our clients
          make well-informed decisions and maximise their returns. Our courses
          cover the basics of trading, technical analysis, charting, and risk
          management. We also provide in-depth analysis of the markets and offer
          guidance on the best trading strategies. <br />
          <br />
          At our company, we believe that with the right knowledge, strategies
          and guidance, anyone can become a successful trader in the stock
          market. We strive to empower individuals to achieve their financial
          goals.
        </div>
        <div className="aboutPoints">
          <div className="point">
            <img src={logo1} alt="" className="logoPoints" />
            <h1 className="pointHeading">Revision Classes</h1>
          </div>
          <div className="point">
            <img src={logo2} alt="" className="logoPoints" />
            <h1 className="pointHeading">Trading System</h1>
          </div>
          <div className="point">
            <img src={logo3} alt="" className="logoPoints" />
            <h1 className="pointHeading">Focus oriented learning</h1>
          </div>
          <div className="point">
            <img src={logo3} alt="" className="logoPoints" />
            <h1 className="pointHeading">6 Months Support</h1>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Picture} alt="" className="picture" />
      </div>
    </div>
  );
}

export default About;
