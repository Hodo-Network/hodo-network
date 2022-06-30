import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
// import { formatUnits } from "@ethersproject/units";
// import useSWR from "swr";

export interface CountryCollectionProps {
  address: string;
  abi: any;
}

export const CountryCollection = ({
  address,
  abi,
}: CountryCollectionProps) => {
  const { account, library } = useWeb3React<Web3Provider>();
  // const { data: balance, mutate } = useSWR([address, "balanceOf", account]);

  useEffect(() => {
    if (library) {
      // listen for changes on an Ethereum address
      console.log("listening for Transfer...");
      const contract = new Contract(address, abi, library.getSigner());
      contract
        .common_supply()
        .then((result: any) => {
          console.log("supply result", result);
        })
        .catch((error: any) => {
          console.log("supply error", error);
        });
      contract
        .balanceOf([account], [0])
        .then((result: any) => {
          console.log("balanceOf result", result);
        })
        .catch((error: any) => {
          console.log("balanceOf error", error);
        });
      // contract.uri(1).then((result: any) => {
      //   console.log(result);
      // });

      // const fromMe = contract.filters.Transfer(account, null);
      // library.on(fromMe, (from, to, amount, event) => {
      //   console.log("Transfer|sent", { from, to, amount, event });
      //   mutate(undefined, true);
      // });
      // const toMe = contract.filters.Transfer(null, account);
      // library.on(toMe, (from, to, amount, event) => {
      //   console.log("Transfer|received", { from, to, amount, event });
      //   mutate(undefined, true);
      // });
      // remove listener when the component is unmounted
      return () => {
        // library.removeAllListeners(toMe);
        // library.removeAllListeners(fromMe);
      };
    }

    // trigger the effect only on component mount
  }, []);

  // if (!balance) {
  //   return null;
  // }
  return (
    <div>
      <p>page</p>
      {/* {parseFloat(formatUnits(balance))} {address} */}
    </div>
  );
};
