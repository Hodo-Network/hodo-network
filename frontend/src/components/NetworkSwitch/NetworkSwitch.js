import React from "react";
import { ChainAddButton } from "../index";
import { TEXT_SWITCH } from "../../constants/text";
import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
} from "../../constants";

export const NetworkSwitch = () => {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
        {TEXT_SWITCH}
      </h1>
      <div className='mt-2 flex space-x-4'>
        <ChainAddButton
          label='Use Avalanche'
          disabled={false}
          params={AVALANCHE_MAINNET_PARAMS}
        />
        <ChainAddButton
          label='Use Fuji Testnet'
          disabled={false}
          params={AVALANCHE_TESTNET_PARAMS}
        />
      </div>
    </div>
  );
};
