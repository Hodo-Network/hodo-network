import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { supportedChainIds } from "../constants";

export default function useSupportedChain() {
  const [supportedChain, setSupportedChain] = useState<boolean>(false);
  const { chainId } = useWeb3React<any>();

  useEffect(() => {
    if (chainId) {
      setSupportedChain(supportedChainIds.includes(chainId));
    }
  }, [chainId]);

  return [supportedChain, setSupportedChain] as const;
}
