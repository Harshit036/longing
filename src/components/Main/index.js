import React from "react";
// import Navbar from "../Navbar";
import Navbarnew from "../Navbar2";
import StockVideo from "../../assets/longingVideo.mp4"
import "./Main.css";

function Home() {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <div className="videoBox">
      <video loop autoPlay={true} playsInline muted>
      <source src={StockVideo} type="video/mp4" /></video>
      </div>
      <Navbarnew />
      <div className="home">
        <div className="mainBox">
          <h1 className="headingMain">
            Unlock the Potential of Indian Stock Markets!
          </h1>
          <a href="https://forms.gle/iRnRaEbNvYkxDs3W8" target="blank">
            <button className="enrollButton">Enroll Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
