import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";

const fetcher = (library: any) => (...args: any) => {
  const [method, ...params] = args;
  console.log(method, params);
  return library[method](...params);
};

export default function Balance() {
  const { account, library } = useWeb3React<Web3Provider>();
  const { data: balance, mutate } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  useEffect(() => {
    if (library) {
      //   console.log('listening for blocks...');
      library.on("block", () => {
        // console.log("update balance...");
        mutate(undefined, true);
      });
    }
    // listen for changes on an Ethereum address
    // remove listener when the component is unmounted
    return () => {
      if (library) {
        library.removeAllListeners("block");
      }
    };
    // trigger the effect only on component mount
  }, []);

  if (!balance) {
    return <div>...</div>;
  }
  // .toPrecision(4)
  return <div>Ξ {parseFloat(formatEther(balance))}</div>;
}
