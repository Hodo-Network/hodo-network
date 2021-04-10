import React, { useEffect, useState } from "react";

const TEXT_DEFAULT = "Use ";
const TEXT_CONNECTED = "Connected to ";

export default function AddChainButton(props) {
  const { label, chainId, rpc, chainName, explorer } = props;
  const [buttonText, setButtonText] = useState(label);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    window.ethereum?.on("chainChanged", (_chainId) => window.location.reload());

    const requestChain = async () => {
      await window.ethereum
        ?.request({ method: "eth_chainId" })
        .then((result) => {
          switch (result) {
            case chainId:
              setButtonText(TEXT_CONNECTED + label);
              setIsDisabled(true);
              break;
            default:
              setButtonText(TEXT_DEFAULT + label);
              break;
          }
        });
    };

    requestChain();
  }, [label, chainId]);

  const onClick = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId,
          rpcUrls: [rpc],
          chainName,
          nativeCurrency: {
            name: "Avalanche",
            decimals: 18,
            symbol: "AVAX",
          },
          blockExplorerUrls: [explorer],
        },
      ],
    });
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
