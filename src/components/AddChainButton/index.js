import React, { useEffect, useState } from "react";

const TEXT_DEFAULT = "Use ";
const TEXT_CONNECTED = "Connected to ";

export default function AddChainButton(props) {
  const { label, params } = props;
  const [buttonText, setButtonText] = useState(label);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    window.ethereum?.on("chainChanged", (_chainId) => window.location.reload());

    const requestChain = async () => {
      try {
        await window.ethereum
          ?.request({ method: "eth_chainId" })
          .then((result) => {
            switch (result) {
              case params.chainId:
                setButtonText(TEXT_CONNECTED + label);
                setIsDisabled(true);
                break;
              default:
                setButtonText(TEXT_DEFAULT + label);
                break;
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    requestChain();
  }, [label, params]);

  const onClick = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [params],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='btn disabled:opacity-50 disabled:cursor-not-allowed'
      onClick={onClick}
      disabled={isDisabled}>
      {buttonText}
    </button>
  );
}
