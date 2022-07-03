import { Fragment } from "react";
import { Tab } from "@headlessui/react";
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
import { TEXT_NETWORK } from "../../constants/text";
import { NFT } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import AssetGrid from "../../components/AssetGrid";
import OnboardingButton from "../../components/Buttons/OnboardingButton";
// import ChainBalance from "../../components/ChainBalance";
import NetworkSwitch from "../../components/NetworkSwitch";
// import TokenList from "../../components/TokenList";
import WalletAddress from "../../components/WalletAddress";

export interface PureAccountViewProps {
  connected?: boolean;
  network?: string;
  address?: string;
  chainId?: number;
  owned?: Array<NFT>;
  sold?: Array<NFT>;
}

export const PureAccountView = ({
  connected = false,
  network,
  address,
  chainId,
  owned = [],
  sold = [],
}: PureAccountViewProps) => {
  const tabs = ["Owned", "Sales", "Network Info"];

  return (
    <ContentWrapper>
      <Tab.Group>
        <Tab.List className='border-b border-base-content'>
          {tabs.map((tab, idx) => (
            <Tab as={Fragment} key={idx}>
              {({ selected }) => (
                <button
                  className={[
                    "w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm",
                    selected
                      ? "border-primary-content text-base-content"
                      : "border-transparent text-bc-muted hover:text-base-content hover:border-primary-content",
                  ].join(" ")}>
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='p-4 sm:p-8 max-w-8xl'>
          <Tab.Panel>
            <AssetGrid items={owned} />
          </Tab.Panel>

          <Tab.Panel>
            <AssetGrid items={sold} />
          </Tab.Panel>

          <Tab.Panel className='space-y-4'>
            <WalletAddress address={address} />

            <div className="space-y-2">
              <h1 className='text-sm uppercase font-medium text-bc-muted'>
                {TEXT_NETWORK}
              </h1>
              {connected ? (
                <p className='overflow-hidden overflow-ellipsis'>
                  {network}
                </p>
              ) : (
                <OnboardingButton />
              )}
            </div>

            {connected && <NetworkSwitch />}

            {/* 
            <div className="space-y-2">
              <h1 className='text-sm uppercase font-medium text-bc-muted'>
                {TEXT_BALANCE}
              </h1>
              <div className='overflow-hidden overflow-ellipsis'>
                {library && (
                  <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
                    <ChainBalance balance={balance} symbol={symbol} />
                    <TokenList chainId={chainId} />
                  </SWRConfig>
                )}
              </div>
            </div>
            */}

            {/* 
            <div className="space-y-2">
              <h1 className='text-sm uppercase font-medium text-bc-muted'>
                {TEXT_ADD_FUNDS}
              </h1>
              {chainId === 43114 ? (
                <p className='overflow-hidden overflow-ellipsis'>
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
                <p className='overflow-hidden overflow-ellipsis'>
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
                <p className='overflow-hidden overflow-ellipsis'>
                  Unsupported network.
                </p>
              )}
            </div>
             */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </ContentWrapper>
  );
};
