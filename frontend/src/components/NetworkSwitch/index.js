import React from "react";
import { ChainAddButton } from "../index";
import { TEXT_SWITCH } from "../../constants/text";
import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
} from "../../constants";

export default function NetworkSwitch() {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
        {TEXT_SWITCH}
      </h1>
      <div className='mt-2 flex space-x-4'>
        <ChainAddButton label='Avalanche' params={AVALANCHE_MAINNET_PARAMS} />
        <ChainAddButton
          label='Fuji Testnet'
          params={AVALANCHE_TESTNET_PARAMS}
        />
      </div>
    </div>
  );
}
