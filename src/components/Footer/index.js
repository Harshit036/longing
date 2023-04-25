import React from "react";
import logo1 from "../../assets/Telegram.svg";
import logo2 from "../../assets/Instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerHeading">
        Follow us for more <b>Stocking</b> updates
      </div>
      <div className="footerLinks">
        <div className="eachLink">
          <img src={logo1} alt="" />
          <a
            href="https://t.me/OM0111"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Telegram
          </a>
        </div>
        <div className="eachLink">
          <img src={logo2} alt="" />
          <a
            href="https://instagram.com/the__longing?igshid=YmMyMTA2M2Y="
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
