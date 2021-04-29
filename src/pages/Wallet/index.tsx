import React from "react";
import { useWeb3React } from "@web3-react/core";
import { ChainAddButton } from "../../components";
import { TEXT_ADDRESS, TEXT_BALANCE, TEXT_NETWORK } from "../../constants/text";
import {
  ChainId,
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
} from "../../constants";

const NETWORK_LABELS = {
  [ChainId.ETHEREUM]: "Ethereum",
  [ChainId.FUJI]: "Avalanche Fuji Testnet",
  [ChainId.AVALANCHE]: "Avalanche Mainnet C-Chain",
};

export default function Wallet() {
  const { account, chainId } = useWeb3React();

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
        <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
          {"coming soon"}
        </p>
      </div>
    </div>
  );
}
