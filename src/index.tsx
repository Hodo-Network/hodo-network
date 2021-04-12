import React from "react";
import ReactDOM from "react-dom";
import Web3Provider from "web3-react";
import Web3 from "web3";
import reportWebVitals from "./reportWebVitals";
import { connectors } from "./connectors";
import App from "./pages/App";

ReactDOM.render(
  <Web3Provider connectors={connectors} libraryName={"web3.js"} web3Api={Web3}>
    <App />
  </Web3Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
