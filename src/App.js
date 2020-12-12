import React, { Component } from "react";

import Intro from "./components/intro/Intro";
import Projects from "./components/Projects/Projects";
import Social from "./components/social/Social";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Social />
      <hr />
      <Projects />
    </div>
  );
}

export default App;
