import React from "react";
import { NavHashLink } from "react-router-hash-link";
const LinksHeader = () => (
  <div className="header__links">
    <NavHashLink to="/#works">works</NavHashLink>
    <NavHashLink to="/#skill-intro">Skills</NavHashLink>
    <NavHashLink to="/#contact">Contact</NavHashLink>
  </div>
);
export default LinksHeader;
