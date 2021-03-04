import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import reportWebVitals from "./reportWebVitals";
import { Home, Browse } from "./pages";
import { ComingSoon } from "./components";

import "./styles/tailwind.output.css";

export const App: FC = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={ComingSoon} />
      <Route path='/home' exact component={Home} />
      <Route path='/browse' component={Browse} />
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
