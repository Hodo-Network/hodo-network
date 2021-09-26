import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { ThemeProvider } from "styled-components";
import store from "./state/redux";
import { useEagerConnect, useInactiveListener } from "./hooks";
import * as paths from "./constants/routes";
import {
  CollectiblePage,
  CollectionPage,
  CollectionsPage,
  // ExplorePage,
  HomePage,
  FaqPage,
  Navbar,
  RoadmapPage,
  Sidebar,
  WalletPage,
} from "./components";

import "./styles/tailwind.output.css";

export default function App() {
  const { connector } = useWeb3React<Web3Provider>();
  const [miniSidebar, setMiniSidebar] = useState(false);

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
    <Provider store={store}>
      {/* @ts-ignore */}
      {/* <ThemeProvider theme={preset}> */}
      <div className='bg-gray-100 dark:bg-gray-900 flex flex-row h-screen overflow-hidden'>
        <Router>
          <Sidebar
            toggle={() => setMiniSidebar(!miniSidebar)}
            mini={miniSidebar}
          />

          <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
            <Navbar hideTitle={!miniSidebar} />

            <Switch>
              <Route path={paths.ROUTE_DEFAULT} exact component={HomePage} />
              <Route
                path={paths.ROUTE_COLLECTIONS}
                exact
                component={CollectionsPage}
              />
              <Route
                path={paths.ROUTE_COLLECTION}
                exact
                component={CollectionPage}
              />
              <Route
                path={paths.ROUTE_COLLECTIBLE}
                component={CollectiblePage}
              />
              {/* <Route path={paths.ROUTE_EXPLORE} exact component={ExplorePage} /> */}
              <Route path={paths.ROUTE_WALLET} exact component={WalletPage} />
              <Route path={paths.ROUTE_ROADMAP} exact component={RoadmapPage} />
              <Route path={paths.ROUTE_FAQ} exact component={FaqPage} />
              {/* {routes.map(({ path, Component, exact }, key) => (
                <Route exact={exact} path={path} key={key} render={Component} />
              ))} */}
            </Switch>
          </div>
        </Router>
      </div>
      {/* </ThemeProvider> */}
    </Provider>
  );
}
