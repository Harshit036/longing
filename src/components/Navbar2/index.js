import React, { useState } from "react";
import "./index.css";
import { HashLink } from "react-router-hash-link";
import { NavLink, Link, useNavigate } from "react-router-dom";
// import img from "../../assets/g12.png";
import { VscMenu } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { IconContext } from "react-icons";

import logo from "../../assets/Group 122.png";

function Navbarnew() {
  const [activeMenu, setActiveMenu] = useState("");
  const [burgerstate, setBurgerState] = useState(true);
  const [ham, setHam] = useState(false);
  //   const navigate = useNavigate();
  const showham = () => {
    setHam(!ham);
    setBurgerState(!burgerstate);
  };
  return (
    <>
      <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
        <div className="navbarWrapper">
          <div className="logos">
            <div className="logo1">
              <img src={logo} id="img1" alt="" />
            </div>
          </div>
          <div className="nav-links">
            <ul className="pageNames">
              <li>
                <HashLink
                  smooth
                  to="/#aboutSection"
                  className={activeMenu === "Home" ? "active-links" : "links"}
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#coursesSection"
                  className={activeMenu === "Home" ? "active-links" : "links"}
                >
                  Courses
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#contactSection"
                  className={activeMenu === "Home" ? "active-links" : "links"}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
            <div className="mobile">
              {ham ? (
                <ImCross className="mob-icon" onClick={showham} />
              ) : (
                <VscMenu className="mob-icon" onClick={showham} />
              )}
            </div>
          </div>
        </div>

        {ham ? (
          <>
            <div className="ham">
              <ul className="nav-i">
                <li>
                  <HashLink
                    smooth
                    to="/#aboutSection"
                    className={activeMenu === "Home" ? "active-links" : "links"}
                    onClick={() => {
                      setHam(false);
                    }}
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#coursesSection"
                    className={activeMenu === "Home" ? "active-links" : "links"}
                    onClick={() => {
                      setHam(false);
                    }}
                  >
                    Courses
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#contactSection"
                    className={activeMenu === "Home" ? "active-links" : "links"}
                    onClick={() => {
                      setHam(false);
                    }}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          " "
        )}
      </IconContext.Provider>
    </>
  );
}

export default Navbarnew;
