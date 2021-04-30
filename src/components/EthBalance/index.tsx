import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";

const symbol = "AVAX";

export default function EthBalance() {
  const { account, library } = useWeb3React<Web3Provider>();
  const { data: balance, mutate } = useSWR(["getBalance", account, "latest"]);

  useEffect(() => {
    if (library) {
      library.on("block", () => {
        mutate(undefined, true);
      });
    }

    return () => {
      if (library) {
        library.removeAllListeners("block");
      }
    };
  }, []);

  if (!balance) {
    return <div>...</div>;
  }
  return (
    <div>
      {parseFloat(formatEther(balance))} {symbol}
    </div>
  );
}
