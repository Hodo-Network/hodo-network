import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEagerConnect, useInactiveListener } from "../hooks";
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
  const context = useWeb3React<Web3Provider>();
  const { connector } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

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
            <Route path={ROUTE_BROWSE_ALL} component={Browse} />
            <Route path={`${ROUTE_ASSET}/:id`} exact component={Collectible} />
            <Route path={ROUTE_ACCOUNT} exact component={Account} />
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
