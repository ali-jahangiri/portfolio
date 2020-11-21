import React from "react";

import IntroSection from "../components/IntroSection";
import ToyItem from "./ToyItem";

import nailImg from "../img/nailGif.gif";
import newsimg from "../img/ezgif.com-gif-maker.gif";

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
      <ToyItem desc="newssy" img={newsimg} />
    </div>
  </div>
);
export default ToyApp;
