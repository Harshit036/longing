import React, { useState } from "react";
// import { slide as Menu } from "react-burger-menu";
import logo from "../../assets/Group 122.png";
import { Link } from "react-router-dom";

// import "./Navbar.css";

function Navbar() {
  const [ham, setHam] = useState(false);
  const showham = () => {
    setHam(!ham);
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navlinks">
        <div className="desktop">
          <div className="link">
            <p className="linkName">About</p>
          </div>
          <div className="link">
            <p className="linkName">Courses</p>
          </div>
          <div className="link">
            <p className="linkName">Contact</p>
          </div>
        </div>

        <div className="mobile">
          {ham ? (
            <button onClick={showham}>Click me bsdk</button>
          ) : (
            <button onClick={showham}>Open me bsdk</button>
          )}
        </div>
      </div>
      {ham ? (
        <>
          <div className="hamburger">
            <ul className="nav-i">
              <li>
                <Link to=".About">About</Link>
              </li>
              <li>
                <Link to=".Courses">ABOUT US</Link>
              </li>
              <li>
                <Link to=".Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        " "
      )}
    </div>
  );
}

export default Navbar;
