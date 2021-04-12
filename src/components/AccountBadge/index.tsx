import React from "react";
import { useWeb3React } from "@web3-react/core";

export default function AccountBadge() {
  const { account } = useWeb3React();

  return (
    <span className='w-48 overflow-hidden inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-green-100 text-green-800'>
      {/* <svg
        className='-ml-0.5 mr-1.5 h-2 w-2 text-green-500 flex-shrink-0'
        fill='currentColor'
        viewBox='0 0 8 8'>
        <circle cx='4' cy='4' r='3' />
      </svg> */}
      <span className='truncate'>{account}</span>
    </span>
  );
}
