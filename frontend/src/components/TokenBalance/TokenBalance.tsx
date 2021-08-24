import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import ERC20ABI from "../../abi/ERC20.abi.json";

export interface TokenBalanceProps {
  symbol: string;
  address: string;
  decimals: number;
}

export const TokenBalance: React.FC<TokenBalanceProps> = ({
  symbol,
  address,
  decimals,
}) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const { data: balance, mutate } = useSWR([address, "balanceOf", account]);

  useEffect(() => {
    if (library) {
      // listen for changes on an Ethereum address
      console.log("listening for Transfer...");
      const contract = new Contract(address, ERC20ABI, library.getSigner());
      const fromMe = contract.filters.Transfer(account, null);
      library.on(fromMe, (from, to, amount, event) => {
        console.log("Transfer|sent", { from, to, amount, event });
        mutate(undefined, true);
      });
      const toMe = contract.filters.Transfer(null, account);
      library.on(toMe, (from, to, amount, event) => {
        console.log("Transfer|received", { from, to, amount, event });
        mutate(undefined, true);
      });
      // remove listener when the component is unmounted
      return () => {
        library.removeAllListeners(toMe);
        library.removeAllListeners(fromMe);
      };
    }

    // trigger the effect only on component mount
  }, []);

  if (!balance) {
    return null;
  }
  return (
    <div>
      {parseFloat(formatUnits(balance, decimals))} {symbol}
    </div>
  );
};
