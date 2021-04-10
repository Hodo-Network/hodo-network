import React, { useEffect, useState, useRef } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { TEXT_INSTALL_METAMASK, TEXT_CONNECT } from "../../constants/text";

export default function OnboardingButton() {
  const [buttonText, setButtonText] = useState(TEXT_INSTALL_METAMASK);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(accounts[0]);
        setDisabled(true);
        onboarding?.current?.stopOnboarding();
      } else {
        setButtonText(TEXT_CONNECT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const onClick = async () => {
    try {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((newAccounts) => setAccounts(newAccounts));
      } else {
        onboarding.current.startOnboarding();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='btn btn--small disabled:opacity-50 disabled:cursor-not-allowed truncate w-44'
      disabled={isDisabled}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}
