// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
// import { AVALANCHE_MAINNET_PARAMS } from "../../constants";
import ContentWrapper from "../../ContentWrapper";
import {
  // TEXT_BALANCE,
  TEXT_NETWORK,
  // TEXT_ADD_FUNDS,
} from "../../constants/text";
// import EthBalance from "../EthBalance";
// import TokenList from "../TokenList";
import OnboardingButton from "../OnboardingButton";
import WalletAddress from "../WalletAddress";
import NetworkSwitch from "../NetworkSwitch";
// import ChainAddButton from "../ChainAddButton";

export interface PureWalletPageProps {
  connected?: boolean;
  network?: string;
  address?: string | null;
  chainId?: any;
}

export const PureWalletPage = ({
  connected,
  network,
  address,
  chainId,
}: PureWalletPageProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl space-y-8'>
        <WalletAddress address={address} loading={false} />

        <div>
          <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
            {TEXT_NETWORK}
          </h1>
          {connected ? (
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              {network}
            </p>
          ) : (
            <div className='mt-2'>
              <OnboardingButton />
            </div>
          )}
        </div>

        {connected && <NetworkSwitch />}

        {/* <div>
          <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
            {TEXT_BALANCE}
          </h1>
          <div className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
            {library && (
              <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
                <EthBalance />
                <TokenList chainId={chainId} />
              </SWRConfig>
            )}
          </div>
        </div> */}

        {/* <div>
          <h1 className='text-sm uppercase font-medium text-gray-500 dark:text-gray-400'>
            {TEXT_ADD_FUNDS}
          </h1>
          {chainId === 43114 ? (
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              Purchase AVAX from an exchange and send it to the X-Chain address
              in your wallet at{" "}
              <a
                href='https://wallet.avax.network/'
                target='_blank'
                rel='noreferrer'
                className='text-blue-600 font-medium'>
                https://wallet.avax.network/
              </a>
              .<br />
              Make a Cross Chain transfer to get funds on the C-Chain.
              <br />
              Send AVAX from your C-Chain address to your MetaMask address (this
              is also a C-Chain address).
            </p>
          ) : chainId === 43113 ? (
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              Request tokens from the{" "}
              <a
                href='https://faucet.avax-test.network/'
                target='_blank'
                rel='noreferrer'
                className='text-blue-600 font-medium'>
                AVAX Test Faucet.
              </a>
            </p>
          ) : (
            <p className='mt-2 font-medium text-gray-900 dark:text-gray-200 overflow-hidden overflow-ellipsis'>
              Unsupported network.
            </p>
          )}
        </div> */}
      </div>
    </ContentWrapper>
  );
};
