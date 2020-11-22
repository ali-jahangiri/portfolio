import React from "react";
import Contact from "../components/Contact";

import Intro from "../components/intro";
import IntroSection from "../components/IntroSection";
import Skills from "../components/skills";
import ToyApp from "../components/ToyApps";

const Home = () => (
  <div className="container">
    <Intro />
    <Skills />
    <ToyApp />
    <IntroSection>
      <p>Contact</p>
    </IntroSection>
    <Contact />
  </div>
);

export default Home;
