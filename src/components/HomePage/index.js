import React from "react";
import About from "../About";
import Main from "../Main";
import Courses from "../Courses";
import Educator from "../Educator";
import Contact from "../Contact";
import Footer from "../Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Main />
      <About />
      <Courses />
      <Educator />
      <Contact />
      <hr className="horizontalLine" />
      <Footer />
    </div>
  );
}

export default HomePage;
