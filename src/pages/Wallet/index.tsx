import React, { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { SWRConfig } from "swr";
import fetcher from "swr-eth";
import { EthBalance, TokenList, ChainAddButton } from "../../components";
import { TEXT_ADDRESS, TEXT_BALANCE, TEXT_NETWORK } from "../../constants/text";
import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
  TOKENS_BY_NETWORK,
  NETWORK_LABELS,
} from "../../constants";

export default function Wallet() {
  const { chainId, account, library, active } = useWeb3React<Web3Provider>();

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

  return (
    <div className='p-4 sm:p-8 lg:p-12 max-w-8xl'>
      <div>
        <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
          {TEXT_NETWORK}
        </h1>
        <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          {chainId && NETWORK_LABELS[chainId]}
        </p>
      </div>

      <div className='mt-4 flex space-x-4'>
        <ChainAddButton label='Mainnet' params={AVALANCHE_MAINNET_PARAMS} />
        <ChainAddButton label='Testnet' params={AVALANCHE_TESTNET_PARAMS} />
      </div>

      <div className='mt-8'>
        <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
          {TEXT_ADDRESS}
        </h1>
        <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          {account}
        </p>
      </div>

      <div className='mt-8'>
        <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
          {TEXT_BALANCE}
        </h1>
        <div className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          {active && chainId && library && (
            <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
              <EthBalance />
              <TokenList chainId={chainId} />
            </SWRConfig>
          )}
        </div>
      </div>
    </div>
  );
}
