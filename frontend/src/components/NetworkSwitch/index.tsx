import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { PureNetworkSwitch } from './NetworkSwitch';

const NetworkSwitch = () => {
  const { chainId } = useWeb3React<Web3Provider>();

  return <PureNetworkSwitch chainId={chainId} />;
};

export default NetworkSwitch;
