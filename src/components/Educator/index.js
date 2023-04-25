import React from "react";
import Picture from "../../assets/Educator photo.png";
import "./Educator.css";

function Educator() {
  return (
    <div className="educator" id="educatorSection">
      <div className="aboutEducator">About Owner</div>
      <div className="educatorBox">
        <div className="leftEducator">
          <img src={Picture} alt="" />
        </div>
        <div className="rightEducator">
          <div className="educatorInfo">
            <div className="educatorInfo2">
              <div className="educatorName">Kartik Bansal</div>
              <div className="educatorQual">Founder, Longing</div>
              <div className="educatorDescp">
                Meet Kartik, the founder of Longing, a leading stock market
                trading firm! He is an expert on behavioral aspects of the Stock
                Market and has great experience in analyzing stock chart
                patterns which he has co-related with human psychological
                patterns at a deeper level. His Beleive lies in preparing,
                performing, reviewing, revamping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educator;
