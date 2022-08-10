import MetaMaskOnboarding from '@metamask/onboarding';
import { useEffect, useRef, useState } from 'react';
// import detectEthereumProvider from "@metamask/detect-provider";
// import { useWeb3React } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";
import {
  TEXT_CONNECT,
  TEXT_CONNECTED,
  TEXT_INSTALL_METAMASK,
} from '../../../constants/text';
import { PureOnboardingButton } from './OnboardingButton';

const OnboardingButton = () => {
  const [label, setLabel] = useState(TEXT_INSTALL_METAMASK);
  const [disabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef<MetaMaskOnboarding>();
  // const { library, connector, chainId } = useWeb3React<Web3Provider>();
  // const [provider, setProvider] = useState<any>();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setLabel(TEXT_CONNECTED);
        setDisabled(true);
        onboarding.current?.stopOnboarding();
      } else {
        setLabel(TEXT_CONNECT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const handleNewAccounts = (newAccounts: any) => {
    setAccounts(newAccounts);
  };

  const onClick = async () => {
    // const updateProvider = async () => {
    //   const result = await detectEthereumProvider();
    //   setProvider(result);
    // };
    // updateProvider();

    try {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        // @ts-ignore
        await ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleNewAccounts);
        // @ts-ignore
        ethereum.on('accountsChanged', handleNewAccounts);
        return () => {
          // @ts-ignore
          ethereum?.off('accountsChanged', handleNewAccounts);
        };
      } else {
        // @ts-ignore
        onboarding.current.startOnboarding();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PureOnboardingButton
      label={label}
      disabled={disabled}
      onConnect={onClick}
    />
  );
};

export default OnboardingButton;
