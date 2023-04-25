import React from "react";
// import Navbar from "./components/Navbar";
// import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mainPage">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Main />
        <About />
        <Courses />
        <Educator />
        <Contact /> */}
      </div>
    </Router>
  );
}

export default App;
