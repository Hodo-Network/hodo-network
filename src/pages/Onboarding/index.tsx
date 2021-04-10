import React from "react";
import { AddChainButton, OnboardingButton } from "../../components";
import { TEXT_ONBOARDING } from "../../constants/text";

export default function Onboarding() {
  return (
    <main className='px-4 sm:px-8 lg:px-12 py-12 flex-grow'>
      <div className='mx-auto max-w-4xl'>
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
              <p className='font-medium text-base'>Connect to MetaMask</p>
              <p className='mt-1'>
                Install the extension and go through the prompts to setup a new
                wallet.
              </p>
              <div className='mt-4'>
                <OnboardingButton />
              </div>
            </li>

            <li className='px-4 py-4 sm:px-6'>
              <p className='font-medium text-base'>Add Avalanche Network</p>
              <p className='mt-1'>
                Avalanche isn't a default network so we'll need to add it.
              </p>
              <div className='mt-4 flex space-x-4'>
                <AddChainButton
                  label='Mainnet'
                  chainId='0xa86a'
                  rpc='https://api.avax.network/ext/bc/C/rpc'
                  chainName='Avalanche Mainnet'
                  explorer='https://cchain.explorer.avax.network/'
                />
                <AddChainButton
                  label='Testnet'
                  chainId='0xa869'
                  rpc='https://api.avax-test.network/ext/bc/C/rpc'
                  chainName='Avalanche Fuji Testnet'
                  explorer='https://cchain.explorer.avax-test.network/'
                />
              </div>
            </li>

            <li className='px-4 py-4 sm:px-6'>
              <p className='font-medium text-base'>Add Funds</p>
              <p className='mt-1'>
                <b>Mainnet</b>: purchase AVAX from an exchange and send it to
                your wallet address. You may need to{" "}
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
    </main>
  );
}
