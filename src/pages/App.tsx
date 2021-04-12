import React, { useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Collectible, Browse, Account, Onboarding } from ".";
import { Footer, Navbar } from "../components";
import {
  ROUTE_DEFAULT,
  ROUTE_ASSET,
  ROUTE_ONBOARDING,
  ROUTE_BROWSE_ALL,
  ROUTE_ACCOUNT,
} from "../constants/routes";
import "../styles/tailwind.output.css";

export default function App() {
  const context = useWeb3Context();

  useEffect(() => {
    context.setFirstValidConnector(["MetaMask"]);
  }, [context]);

  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-full flex flex-col'>
      <Router>
        <Route
          render={({ location }) =>
            [ROUTE_ONBOARDING].includes(location.pathname) ? null : <Navbar />
          }
        />

        <main className='px-4 sm:px-8 lg:px-12 flex-grow'>
          <Switch>
            <Route path={ROUTE_ONBOARDING} exact component={Onboarding} />
            <Route path={ROUTE_DEFAULT} exact component={Home} />
            <Route path={ROUTE_BROWSE_ALL} exact component={Browse} />
            <Route path={`${ROUTE_ASSET}/:id`} component={Collectible} />
            <Route path={ROUTE_ACCOUNT} exact component={Account} />
            {/* <Route render={() => <Redirect to={ROUTE_ONBOARDING} />} /> */}
          </Switch>
        </main>

        <Route
          render={({ location }) =>
            [ROUTE_ONBOARDING].includes(location.pathname) ? null : <Footer />
          }
        />
      </Router>
    </div>
  );
}
