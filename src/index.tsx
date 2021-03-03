import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import reportWebVitals from "./reportWebVitals";
import { Home, Browse } from "./pages";
import { Navbar } from "./components";

import "./styles/tailwind.output.css";

export const App: FC = () => (
  <Router>
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow flex bg-gray-100'>
        <div className='w-full h-full'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/browse' component={Browse} />
          </Switch>
        </div>
      </div>
    </div>
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
