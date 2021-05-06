import React, { useEffect, useState, useRef } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import {
  TEXT_INSTALL_METAMASK,
  TEXT_CONNECT,
  TEXT_CONNECTED,
} from "../../constants/text";

export default function OnboardingButton() {
  const [buttonText, setButtonText] = useState(TEXT_INSTALL_METAMASK);
  const [isDisabled, setDisabled] = useState(false);
  const onboarding = useRef();
  const { account } = useWeb3React();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account) {
        setButtonText(TEXT_CONNECTED);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(TEXT_CONNECT);
        setDisabled(false);
      }
    }
  }, [account]);

  const onClick = async () => {
    try {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } else {
        onboarding.current.startOnboarding();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='btn disabled:opacity-50 disabled:cursor-not-allowed'
      disabled={isDisabled}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}
