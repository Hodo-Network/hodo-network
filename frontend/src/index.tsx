import React from "react";
import { createRoot } from "react-dom/client";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { NetworkContextName } from "./constants";
import getLibrary from "./utils/getLibrary";
import App from "./App";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <App />
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>
);
