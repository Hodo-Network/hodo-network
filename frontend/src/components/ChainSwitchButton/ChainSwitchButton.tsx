import { useEffect, useState } from "react";
import Button from "../../base/Button";

export interface ChainSwitchButtonProps {
  label: string;
  disabled: boolean;
  params?: any;
}

export const ChainSwitchButton = ({
  label,
  disabled,
  params,
}: ChainSwitchButtonProps) => {
  useEffect(() => {
    // TODO: move higher up?
    // ethereum?.on("chainChanged", (_chainId) => window.location.reload());

    const requestChain = async () => {
      // try {
      //   await ethereum?.request({ method: "eth_chainId" });
      // } catch (error) {
      //   console.error(error);
      // }
    };

    requestChain();
  }, [label, params]);

  const onClick = async () => {
    // try {
    //   await ethereum?.request({
    //     method: "wallet_addEthereumChain",
    //     params: [params],
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Button color="primary" onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};
