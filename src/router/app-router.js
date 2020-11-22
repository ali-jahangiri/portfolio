import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "../page/home";
import Header from "../components/header";

const AppRouter = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default AppRouter;
