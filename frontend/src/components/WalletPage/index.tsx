// import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
import {
  // TOKENS_BY_NETWORK,
  NETWORK_LABELS,
} from "../../constants";
import { PureWalletPage } from "./WalletPage";

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
// import TokenArtifact from "../contracts/Token.json";
// import contractAddress from "../contracts/contract-address.json";
// This is the Hardhat Network id, you might change it in the hardhat.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
// const HARDHAT_NETWORK_ID = "31337";

// This is an error code that indicates that the user canceled a transaction
// const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const WalletPage = () => {
  const { chainId, account } = useWeb3React<Web3Provider>();

  // [
  //   [ 0x00001, JSONABI ]
  // ]
  // const ABIs: any[] = useMemo(() => {
  //   if (chainId) {
  //     return (
  //       TOKENS_BY_NETWORK[chainId] || []
  //     ).map(({ address, abi }: { address: string; abi: any }) => [
  //       address,
  //       abi,
  //     ]);
  //   } else {
  //     return [];
  //   }
  // }, [chainId]);

  return (
    <PureWalletPage
      // @ts-ignore
      network={NETWORK_LABELS[chainId]}
      address={account}
      chainId={chainId}
      connected={!!chainId}
    />
  );
};

export default WalletPage;
