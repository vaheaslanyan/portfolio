import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/shared/NavBar";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Contact from "./components/Contact";

const App = () => {
  return (
    <React.Fragment>
      <div id="main-div">
        <NavBar />
        <Hello />
        <About />
        <Projects />
        <Knowledge />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default App;

/*
      <About />
      <Knowledge />
      <Projects />
      <Contact />
*/
