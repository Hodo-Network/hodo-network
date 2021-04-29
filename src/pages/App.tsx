import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEagerConnect, useInactiveListener } from "../hooks";
import { Asset, Collections, Explore, Home, Faq, Onboarding, Wallet } from ".";
import { Navbar, Sidebar } from "../components";
import {
  ROUTE_ASSETS,
  ROUTE_COLLECTIONS,
  ROUTE_DEFAULT,
  ROUTE_EXPLORE,
  ROUTE_FAQ,
  ROUTE_ONBOARDING,
  ROUTE_WALLET,
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
    <div className='bg-gray-100 dark:bg-gray-900 flex flex-row h-screen overflow-hidden'>
      <Router>
        <Route
          render={({ location }) =>
            [ROUTE_ONBOARDING].includes(location.pathname) ? null : <Sidebar />
          }
        />

        <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
          <Route
            render={({ location }) =>
              [ROUTE_ONBOARDING].includes(location.pathname) ? null : <Navbar />
            }
          />

          <main className='min-w-0 flex-1 overflow-y-scroll'>
            <Switch>
              <Route path={ROUTE_ONBOARDING} exact component={Onboarding} />
              <Route path={ROUTE_DEFAULT} exact component={Home} />
              <Route
                path={`${ROUTE_COLLECTIONS}/:name`}
                component={Collections}
              />
              <Route path={`${ROUTE_ASSETS}/:id`} exact component={Asset} />
              <Route path={ROUTE_EXPLORE} exact component={Explore} />
              <Route path={ROUTE_WALLET} exact component={Wallet} />
              <Route path={ROUTE_FAQ} exact component={Faq} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}
