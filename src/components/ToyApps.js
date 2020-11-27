import React from "react";

import IntroSection from "../components/IntroSection";
import ToyItem from "./ToyItem";

import nailImg from "../img/nailGif.gif";
import newsimg from "../img/ezgif.com-gif-maker.gif";
import ecommerce from "../img/Untitled Project.gif";

const ToyApp = () => (
  <div id="works" className="toy__container">
    <IntroSection>
      <p>and my app was created until Now</p>
    </IntroSection>
    <div className="row">
      <ToyItem
        link="https://ali-jahangiri.github.io/nailApp/"
        desc="Nail"
        img={nailImg}
      />
      <ToyItem
        desc="newssy"
        link="https://github.com/ali-jahangiri/newssy"
        img={newsimg}
      />
      <ToyItem
        desc="e commerce"
        link="https://ali-jahangiri.github.io/e-commerce-app/"
        img={ecommerce}
      />
    </div>
  </div>
);
export default ToyApp;
