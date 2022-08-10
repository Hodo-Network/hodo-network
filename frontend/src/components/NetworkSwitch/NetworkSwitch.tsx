import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
  ChainId,
} from '../../constants';
import { TEXT_SWITCH } from '../../constants/text';
import ChainAddButton from '../Buttons/ChainAddButton';

export interface PureNetworkSwitchProps {
  chainId?: number;
}

export const PureNetworkSwitch = ({ chainId }: PureNetworkSwitchProps) => {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500'>
        {TEXT_SWITCH}
      </h1>
      <div className='mt-2 flex space-x-4'>
        <ChainAddButton
          label='Use Avalanche'
          disabled={chainId === ChainId.AVALANCHE}
          params={AVALANCHE_MAINNET_PARAMS}
        />
        <ChainAddButton
          label='Use Fuji Testnet'
          disabled={chainId === ChainId.FUJI}
          params={AVALANCHE_TESTNET_PARAMS}
        />
      </div>
    </div>
  );
};
