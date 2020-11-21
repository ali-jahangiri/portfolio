import React from "react";

import Intro from "../components/intro";
import Skills from "../components/skills";
import ToyApp from "../components/ToyApps";

const Home = () => (
  <div className="container">
    <Intro />
    <Skills />
    <ToyApp />
  </div>
);

export default Home;
