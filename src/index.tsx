import React, { FC } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import reportWebVitals from "./reportWebVitals";
import { Home, Browse, Collectible } from "./pages";
import { ComingSoon } from "./components";
import {
  DEFAULT_ROUTE,
  BROWSE_ALL_ROUTE,
  ASSET_ROUTE,
  COMING_SOON_ROUTE,
} from "./constants/routes";

import "./styles/tailwind.output.css";

export const App: FC = () => (
  <Router>
    <Switch>
      <Route path={COMING_SOON_ROUTE} exact component={ComingSoon} />
      <Route path={DEFAULT_ROUTE} exact component={Home} />
      <Route path={BROWSE_ALL_ROUTE} component={Browse} />
      <Route path={`${ASSET_ROUTE}/:id`} component={Collectible} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
