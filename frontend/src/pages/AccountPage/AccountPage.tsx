import { Fragment } from "react";
import { Tab } from "@headlessui/react";
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
// import { AVALANCHE_MAINNET_PARAMS } from "../../constants";
import {
  // TEXT_BALANCE,
  TEXT_NETWORK,
  // TEXT_ADD_FUNDS,
} from "../../constants/text";
import ContentWrapper from "../../ContentWrapper";
// import ChainBalance from "../ChainBalance";
// import TokenList from "../TokenList";
import UserNftList from "../../components/UserNftList";
import OnboardingButton from "../../components/Buttons/OnboardingButton";
import WalletAddress from "../../components/WalletAddress";
import NetworkSwitch from "../../components/NetworkSwitch";
import { PureSoldAssetList } from "../../components/SoldAssetList/SoldAssetList";
import { NFT } from "../../typings/nft";
// import ChainAddButton from "../../components/ChainAddButton";

export interface PureAccountPageProps {
  connected?: boolean;
  network?: string;
  address?: string | null;
  chainId?: any;
  loading?: boolean;
  owned: Array<NFT>;
  sold: Array<NFT>;
}

export const PureAccountPage = ({
  connected,
  network,
  address,
  chainId,
  loading = false,
  owned,
  sold,
}: PureAccountPageProps) => {
  const tabs = ["Owned", "Sales", "Network Info"];

  return (
    <ContentWrapper>
      <Tab.Group>
        <Tab.List className='border-b border-gray-300'>
          {tabs.map((tab, idx) => (
            <Tab as={Fragment} key={idx}>
              {({ selected }) => (
                <button
                  className={[
                    "w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm",
                    selected
                      ? "border-primary-content text-primary"
                      : "border-transparent text-bc-muted hover:text-gray-700 hover:border-gray-300",
                  ].join(" ")}>
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='p-4 sm:p-8 max-w-8xl'>
          <Tab.Panel>
            {/* <h2 className='text-2xl py-2'>Items Created</h2> */}
            <UserNftList />
          </Tab.Panel>

          <Tab.Panel>
            {/* <h2 className='text-2xl py-2'>Items Sold</h2> */}
            <PureSoldAssetList items={sold} />
          </Tab.Panel>

          <Tab.Panel className='space-y-8'>
            <WalletAddress address={address} loading={false} />

            <div>
              <h1 className='text-sm uppercase font-medium text-bc-muted space-y-2'>
                {TEXT_NETWORK}
              </h1>
              {connected ? (
                <p className='font-medium overflow-hidden overflow-ellipsis'>
                  {network}
                </p>
              ) : (
                <OnboardingButton />
              )}
            </div>

            {connected && <NetworkSwitch />}

            {/* <div>
              <h1 className='text-sm uppercase font-medium text-bc-muted'>
                {TEXT_BALANCE}
              </h1>
              <div className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                {library && (
                  <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
                    <ChainBalance balance={balance} symbol={symbol} />
                    <TokenList chainId={chainId} />
                  </SWRConfig>
                )}
              </div>
            </div> */}

            {/* <div>
              <h1 className='text-sm uppercase font-medium text-bc-muted'>
                {TEXT_ADD_FUNDS}
              </h1>
              {chainId === 43114 ? (
                <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                  Purchase AVAX from an exchange and send it to the X-Chain address
                  in your wallet at{" "}
                  <a
                    href='https://wallet.avax.network/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary font-medium'>
                    https://wallet.avax.network/
                  </a>
                  .<br />
                  Make a Cross Chain transfer to get funds on the C-Chain.
                  <br />
                  Send AVAX from your C-Chain address to your MetaMask address (this
                  is also a C-Chain address).
                </p>
              ) : chainId === 43113 ? (
                <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                  Request tokens from the{" "}
                  <a
                    href='https://faucet.avax-test.network/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-primary font-medium'>
                    AVAX Test Faucet.
                  </a>
                </p>
              ) : (
                <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                  Unsupported network.
                </p>
              )}
            </div> */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </ContentWrapper>
  );
};
