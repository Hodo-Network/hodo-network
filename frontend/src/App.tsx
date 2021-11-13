import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider } from "react-redux";
import { store } from "./store";
import { useEagerConnect, useInactiveListener } from "./hooks";
import * as paths from "./constants/routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

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
      <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-row h-screen overflow-hidden'>
        <Router>
          <Sidebar
            toggle={() => setMiniSidebar(!miniSidebar)}
            mini={miniSidebar}
          />

          <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
            <Navbar hideTitle={!miniSidebar} />

            <Switch>
              {routes.map(({ path, Component, exact }, key) => (
                <Route
                  path={path}
                  component={Component}
                  exact={exact}
                  key={key}
                />
              ))}
              <Redirect to={paths.ROUTE_DEFAULT} />
            </Switch>
          </div>
        </Router>
      </div>
      {/* </ThemeProvider> */}
    </Provider>
  );
}
