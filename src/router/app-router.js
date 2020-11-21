import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../page/home";
import Header from "../components/header";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
