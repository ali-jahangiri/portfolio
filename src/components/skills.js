import React from "react";
import SkillsItem from "./skills-item";

import "../img/sss.svg";
import IntroSection from "./IntroSection";

const Skills = () => (
  <div className="row">
    <div className="col-md-12">
      <IntroSection>
        <p>Dive deep into what I already know</p>
      </IntroSection>
      <div className="card-columns">
        <SkillsItem
          icon="fa-html5"
          describe="Familiar with semantic tags"
          name="Html"
        />
        <SkillsItem
          icon="fa-css3 "
          describe="Advance Selectore , Responsive Design , Animations and movement , Flexbox , Grid , Box model .etc"
          name="Css"
        />
        <SkillsItem
          icon="fa-js"
          describe="Control Program flow , DOM Manipulating , Fetch Api and Ajax Call (and old day of XHR) , ES6 / ES7 , Modular js , Hoisting , scop , OOP in js & prototype , Event bubbling , Primitive & Refrence Type , .etc"
          name="Js"
        />
        <SkillsItem
          img="https://img.icons8.com/ios/150/000000/redux.png"
          describe="Reason behind the Redux and problem that solves, Flux pattern & one way data flow, Reducers, Actions & Actions Type & Actions Generator, File Srtucturing (Ducks pattern), Srtucturing store & Normilaize, Redux Toolkit (slice, write mutted code , .etc), Reselect & memorization, Redux devtool, connect the store to React Components, Persistore , Middlewere , Asynchronous actions"
          classes="redux"
          name="Redux"
        />
        <SkillsItem
          img="https://docusaurus.io/img/users/formik.png"
          classes="formik"
          name="Formik"
          describe="Handling form in React in Easiest way"
        />
        <SkillsItem
          describe="Functional & class base component, conditional rendering, LifeCycle, HOCs, Hooks, context API, Refs, Handling Form ,state Management , PropType"
          icon="fa-react"
          name="React"
        />
        <SkillsItem
          describe="Variables , @mixin and @include , @extend , @function , Nesting , partials , file structure"
          img="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png"
          classes="sass"
          name="Sass"
        />
        <SkillsItem
          name="bootstrap"
          icon="fa-bootstrap"
          describe="Grid system , Base colors , Responsive Layout , Alignment , Form Classes , Card , Table Classes , .etc"
        />
        <SkillsItem
          name="Git"
          classes="git"
          img="https://img.icons8.com/color/96/000000/git.png"
          describe="most of git commands , git stage & unstage , Branches , Cloning & Remote , Publish to Github "
        />
        <SkillsItem
          name="Testing"
          icon="far fa-clipboard"
          describe="unit test in isolation , components testing with enzyme"
        />
      </div>
    </div>
  </div>
);

export default Skills;
