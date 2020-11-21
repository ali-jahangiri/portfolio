import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import AppRouter from "./router/app-router";

import "./style/bootstrap.css";
import "./style/base.scss";

const App = () => <AppRouter />;

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
