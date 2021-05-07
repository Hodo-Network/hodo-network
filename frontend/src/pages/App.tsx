import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEagerConnect, useInactiveListener } from "../hooks";
import { Navbar, Sidebar } from "../components";
import * as paths from "../constants/routes";
import {
  Collectible,
  Collection,
  Collections,
  Explore,
  Home,
  Faq,
  Onboarding,
  Roadmap,
  Wallet,
} from "./index";
import "../styles/tailwind.output.css";

export default function App() {
  const [miniSidebar, setMiniSidebar] = useState(true);
  const { connector } = useWeb3React<Web3Provider>();

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
        <Sidebar
          toggle={() => setMiniSidebar(!miniSidebar)}
          miniSidebar={miniSidebar}
        />

        <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
          <Navbar miniSidebar={miniSidebar} />

          <Switch>
            <Route path={paths.ROUTE_DEFAULT} exact component={Onboarding} />
            <Route path={paths.ROUTE_HOME} exact component={Home} />
            <Route
              path={paths.ROUTE_COLLECTIONS}
              exact
              component={Collections}
            />
            <Route path={paths.ROUTE_COLLECTION} exact component={Collection} />
            <Route path={paths.ROUTE_COLLECTIBLE} component={Collectible} />
            <Route path={paths.ROUTE_EXPLORE} exact component={Explore} />
            <Route path={paths.ROUTE_WALLET} exact component={Wallet} />
            <Route path={paths.ROUTE_ROADMAP} exact component={Roadmap} />
            <Route path={paths.ROUTE_FAQ} exact component={Faq} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
