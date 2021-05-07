import React from "react";
import { TEXT_ADDRESS } from "../../constants/text";

export default function WalletAddress({ address }: { address: string }) {
  return (
    <div>
      <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
        {TEXT_ADDRESS}
      </h1>
      <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
        {address}
      </p>
    </div>
  );
}
