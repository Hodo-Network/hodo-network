import React from "react";
import { useWeb3Context } from "web3-react";
import { AddChainButton, OnboardingButton } from "../../components";
import { TEXT_ONBOARDING } from "../../constants/text";
import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
} from "../../constants/index";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Onboarding() {
  const context = useWeb3Context();

  return (
    <div className='mt-12 mx-auto max-w-prose'>
      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
          <h3 className='text-xl leading-7 font-medium uppercase text-indigo-700 dark:text-indigo-500'>
            {TEXT_ONBOARDING}
          </h3>
          <p className='mt-2 text-sm'>
            Our launch is right around the corner! In the meantime, you can
            setup an Avalanche wallet so you're ready when the time comes.
          </p>
        </div>

        <ul className='divide-y divide-gray-200 text-sm'>
          <li className='px-4 py-4 sm:px-6'>
            {context.active ? (
              <p className='flex items-center text-sm'>
                <CheckCircleIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-600' />
                <span className='text-gray-500 mr-1'>Connected to </span>
                <span className='font-medium'>{context.account}</span>
              </p>
            ) : (
              <div>
                <p className='font-medium text-base'>Connect to MetaMask</p>
                <p className='mt-1'>
                  Install the extension and go through the prompts to setup a
                  new wallet.
                </p>
                <div className='mt-4'>
                  <OnboardingButton />
                </div>
              </div>
            )}
          </li>

          <li className='px-4 py-4 sm:px-6'>
            <p className='font-medium text-base'>Use Avalanche</p>
            <p className='mt-1'>
              Avalanche isn't a default network so we'll need to add it.
            </p>
            <div className='mt-4 flex space-x-4'>
              <AddChainButton
                label='Mainnet'
                params={AVALANCHE_MAINNET_PARAMS}
              />
              <AddChainButton
                label='Testnet'
                params={AVALANCHE_TESTNET_PARAMS}
              />
            </div>
          </li>

          <li className='px-4 py-4 sm:px-6'>
            <p className='font-medium text-base'>Add Funds</p>
            <p className='mt-1'>
              <b>Mainnet</b>: purchase AVAX from an exchange and send it to your
              wallet address. You may need to{" "}
              <a
                href='https://wallet.avax.network/'
                target='_blank'
                rel='noreferrer'
                className='text-indigo-600 font-medium'>
                create a wallet
              </a>{" "}
              with an X-Chain address first. Then make the transfer to your
              C-Chain address which is what we're creating with MetaMask.
            </p>
            <p className='mt-4'>
              <b>Testnet</b>: you can request test AVAX from the{" "}
              <a
                href='https://faucet.avax-test.network/'
                target='_blank'
                rel='noreferrer'
                className='text-indigo-600 font-medium'>
                AVAX Test Faucet
              </a>
            </p>
          </li>

          <li className='px-4 py-4 sm:px-6'>
            <p className='font-medium text-base'>Finished</p>
            <p className='mt-1'>
              After we launch you'll be ready to buy your first NFT from Hodo
              Network.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
