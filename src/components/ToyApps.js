import React from "react";

import IntroSection from "../components/IntroSection";
import ToyItem from "./ToyItem";

import nailImg from "../img/nailGif.gif";

const ToyApp = () => (
  <div className="toy__container">
    <IntroSection>
      <p>and my app was created until Now</p>
    </IntroSection>
    <div className="row">
      <ToyItem
        link="https://ali-jahangiri.github.io/nailApp/"
        desc="Nail"
        img={nailImg}
      />
    </div>
  </div>
);
export default ToyApp;
