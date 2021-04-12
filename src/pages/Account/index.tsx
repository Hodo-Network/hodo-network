import React from "react";
import { useWeb3React } from "@web3-react/core";

export default function Account() {
  const { account } = useWeb3React();

  return (
    <div>
      <p>{account}</p>
    </div>
  );
}
