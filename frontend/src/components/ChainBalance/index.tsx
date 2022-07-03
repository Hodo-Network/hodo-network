import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";
import { NATIVE_CURRENCY } from "../../constants";
import { PureChainBalance } from "./ChainBalance";

const ChainBalance = () => {
  const { account, library, chainId } = useWeb3React<Web3Provider>();
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

  return (
    <PureChainBalance
      balance={parseFloat(formatEther(balance))}
      symbol={(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} />
  );
};

export default ChainBalance;
