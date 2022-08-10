import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import * as paths from './constants/routes';
import { useEagerConnect, useInactiveListener } from './hooks';
import routes from './routes';
import { ThemeProvider } from './state/ThemeContext';
import { store } from './store';

import './styles/tailwind.css';

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
      <ThemeProvider>
        <div className='flex flex-row h-screen overflow-hidden'>
          <Router>
            <Sidebar
              title='Hodo Network'
              toggle={() => setMiniSidebar(!miniSidebar)}
              mini={miniSidebar}
            />

            <div className='flex flex-col flex-1 min-h-0 overflow-hidden'>
              <Navbar title='Hodo Network' hideTitle={!miniSidebar} />

              <Routes>
                {routes.map(({ path, Component }, key) => (
                  <Route path={path} element={<Component />} key={key} />
                ))}
                <Route
                  path='*'
                  element={<Navigate to={paths.ROUTE_DEFAULT} />}
                />
              </Routes>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
