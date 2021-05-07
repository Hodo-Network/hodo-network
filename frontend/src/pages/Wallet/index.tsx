import React, { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { SWRConfig } from "swr";
import fetcher from "swr-eth";
import { TOKENS_BY_NETWORK, NETWORK_LABELS } from "../../constants";
import { TEXT_BALANCE, TEXT_NETWORK } from "../../constants/text";
import ContentWrapper from "../ContentWrapper";
import {
  EthBalance,
  TokenList,
  OnboardingButton,
  WalletAddress,
  NetworkSwitch,
} from "../../components";

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

export default function Wallet() {
  const { chainId, account, library } = useWeb3React<Web3Provider>();

  // [
  //   [ 0x00001, JSONABI ]
  // ]
  const ABIs: any[] = useMemo(() => {
    if (chainId) {
      return (
        TOKENS_BY_NETWORK[chainId] || []
      ).map(({ address, abi }: { address: string; abi: any }) => [
        address,
        abi,
      ]);
    } else {
      return [];
    }
  }, [chainId]);

  if (!chainId) {
    return (
      <div className='p-4 sm:p-8 max-w-8xl'>
        <OnboardingButton />
      </div>
    );
  }

  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl space-y-8'>
        <div>
          <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
            {TEXT_NETWORK}
          </h1>
          <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
            {NETWORK_LABELS[chainId]}
          </p>
        </div>

        <NetworkSwitch />

        {account && <WalletAddress address={account} />}

        <div className='mt-8'>
          <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
            {TEXT_BALANCE}
          </h1>
          <div className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
            {library && (
              <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
                <EthBalance />
                <TokenList chainId={chainId} />
              </SWRConfig>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
