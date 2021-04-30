import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { NETWORK_LABELS_SHORT } from "../../constants";

export default function ConnectionBadge() {
  const { chainId, account } = useWeb3React<Web3Provider>();
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("");
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (account) {
      navigator.clipboard.writeText(account);
      navigator.clipboard
        .writeText(account)
        .then(
          function () {
            setMessageColor("green-500");
            setMessage("Copied!");
          },
          function () {
            setMessageColor("red-500");
            setMessage("Failed to copy.");
          }
        )
        .then(() => {
          setShowMsg(true);
          setTimeout(() => {
            setShowMsg(false);
          }, 1200);
        });
    }
  };

  return (
    <div className='flex text-xs font-medium relative'>
      <span className='inline-flex items-center px-3 py-1.5 rounded-l-md border border-green-500 bg-green-50 text-green-700'>
        <svg
          className='-ml-0.5 mr-1.5 h-2 w-2 text-green-500 flex-shrink-0'
          fill='currentColor'
          viewBox='0 0 8 8'>
          <circle cx='4' cy='4' r='3' />
        </svg>
        {chainId && NETWORK_LABELS_SHORT[chainId]}
      </span>
      <span
        className='inline-flex px-3 py-1.5 w-48 overflow-hidden rounded-r-md border border-l-0 border-green-500 bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer'
        onClick={copyToClipboard}>
        <span className='truncate'>{account}</span>
      </span>
      {showMsg && (
        <span
          className={`absolute bg-gray-900 opacity-90 w-full h-full left-0 top-0 font-semibold text-center px-3 py-1.5 rounded-md text-${messageColor}`}>
          {message}
        </span>
      )}
    </div>
  );
}
