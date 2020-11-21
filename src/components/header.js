import React from "react";
import LinksHeader from "./header-link";
import Logo from "./logo";

const Header = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-11 m-auto">
        <div className="header__container">
          <Logo />
          <LinksHeader />
        </div>
      </div>
    </div>
  </div>
);
export default Header;
