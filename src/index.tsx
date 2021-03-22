import { FC } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import reportWebVitals from "./reportWebVitals";
import { Home, Collectible, Browse, ComingSoon } from "./pages";
import { Footer, Navbar } from "./components";
import {
  ROUTE_DEFAULT,
  ROUTE_ASSET,
  ROUTE_COMING_SOON,
  ROUTE_BROWSE_ALL,
} from "./constants/routes";

import "./styles/tailwind.output.css";

export const App: FC = () => (
  <div className='bg-gray-100 dark:bg-gray-900 min-h-full flex flex-col'>
    <Router>
      <Switch>
        <Route path={ROUTE_COMING_SOON} exact component={ComingSoon} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  </div>
);

const DefaultContainer = () => (
  <>
    <Navbar />

    <main className='px-4 sm:px-8 lg:px-12 flex-grow'>
      <Route path={ROUTE_DEFAULT} component={Home} />
      <Route path={ROUTE_BROWSE_ALL} component={Browse} />
      <Route path={`${ROUTE_ASSET}/:id`} component={Collectible} />
    </main>

    <Footer />
  </>
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
