import React from "react";
import { useWeb3React } from "@web3-react/core";
import { ChainId } from "../../constants";

const NETWORK_LABELS = {
  [ChainId.ETHEREUM]: "Ethereum",
  [ChainId.FUJI]: "Fuji",
  [ChainId.AVALANCHE]: "Avalanche",
};

export default function ConnectionBadge() {
  const { chainId, account } = useWeb3React();
  const copyToClipboard = () => {
    if (account) {
      navigator.clipboard.writeText(account);
      alert("Copied to clipboard: " + account);
    }
  };

  return (
    <div className='flex text-xs font-medium'>
      <span className='inline-flex items-center px-3 py-1.5 rounded-l-md border border-green-500 bg-green-50 text-green-700'>
        <svg
          className='-ml-0.5 mr-1.5 h-2 w-2 text-green-500 flex-shrink-0'
          fill='currentColor'
          viewBox='0 0 8 8'>
          <circle cx='4' cy='4' r='3' />
        </svg>
        {chainId && NETWORK_LABELS[chainId]}
      </span>
      <span
        className='inline-flex px-3 py-1.5 w-48 overflow-hidden rounded-r-md border border-l-0 border-green-500 bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer'
        onClick={copyToClipboard}>
        <span className='truncate'>{account}</span>
      </span>
    </div>
  );
}
