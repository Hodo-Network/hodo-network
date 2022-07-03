
import { CheckCircleIcon } from "@heroicons/react/solid";
import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
} from "../../constants";
import { TEXT_ONBOARDING } from "../../constants/text";
import ChainAddButton from "../../components/Buttons/ChainAddButton";
import OnboardingButton from "../../components/Buttons/OnboardingButton";

export interface IPureOnboardingViewProps {
  connected?: boolean;
  address?: string | null;
}

export const PureOnboardingView = ({ connected = false, address }: IPureOnboardingViewProps) => {
  return (
    <div className='p-4 sm:p-8 lg:p-12 mx-auto max-w-prose'>
      <div className='shadow-lg border border-base-300 overflow-hidden sm:rounded-box'>
        <div className='p-4 border-b border-base-300 space-y-2'>
          <h3 className='text-xl leading-7 font-medium uppercase text-primary'>
            {TEXT_ONBOARDING}
          </h3>
          <p className='text-sm'>
            Our launch is right around the corner! In the meantime, you can
            setup an Avalanche wallet so you're ready when the time comes.
          </p>
        </div>

        <ul className='divide-y divide-base-300 text-sm'>
          <li className='p-4'>
            {connected ? (
              <p className='flex items-center gap-1'>
                <CheckCircleIcon className='flex-shrink-0 h-5 w-5 text-success' />
                <span className='text-sm text-gray-500'>Connected to</span>
                <span className='font-semibold'>{address}</span>
              </p>
            ) : (
              <div className="space-y-2">
                <p className='font-semibold text-bc-muted'>Connect to MetaMask</p>
                <p>
                  Install the extension and go through the prompts to setup a
                  new wallet.
                </p>
                <OnboardingButton />
              </div>
            )}
          </li>

          <li className='p-4 space-y-2'>
            <p className='font-semibold text-bc-muted'>Use Avalanche</p>
            <p>
              Avalanche isn't a default network so we'll need to add it.
            </p>
            <div className='flex gap-4'>
              <ChainAddButton
                label='Use Mainnet'
                disabled={false}
                params={AVALANCHE_MAINNET_PARAMS}
              />
              <ChainAddButton
                label='Use Testnet'
                disabled={false}
                params={AVALANCHE_TESTNET_PARAMS}
              />
            </div>
          </li>

          <li className='p-4 space-y-2'>
            <p className='font-semibold text-bc-muted'>Add Funds</p>
            <p>
              <b>Mainnet</b>: purchase AVAX from an exchange and send it to your
              wallet address. You may need to{" "}
              <a
                href='https://wallet.avax.network/'
                target='_blank'
                rel='noreferrer'
                className='link link-primary'>
                create a wallet
              </a>{" "}
              with an X-Chain address first. Then make the transfer to your
              C-Chain address which is what we're creating with MetaMask.
            </p>
            <p>
              <b>Testnet</b>: you can request test AVAX from the{" "}
              <a
                href='https://faucet.avax-test.network/'
                target='_blank'
                rel='noreferrer'
                className='link link-primary'>
                AVAX Test Faucet
              </a>
            </p>
          </li>

          <li className='p-4 space-y-2'>
            <p className='font-semibold text-bc-muted'>Finished</p>
            <p>
              After we launch you'll be ready to buy your first NFT from Hodo
              Network.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
