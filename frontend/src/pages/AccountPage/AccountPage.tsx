import { Fragment } from "react";
import { Tab } from "@headlessui/react";
// import { SWRConfig } from "swr";
// import fetcher from "swr-eth";
// import { AVALANCHE_MAINNET_PARAMS } from "../../constants";
import { NATIVE_CURRENCY } from "../../constants";
import {
  // TEXT_BALANCE,
  TEXT_NETWORK,
  // TEXT_ADD_FUNDS,
} from "../../constants/text";
import ContentWrapper from "../../ContentWrapper";
// import ChainBalance from "../ChainBalance";
// import TokenList from "../TokenList";
import UserNftList from "../../components/UserNftList";
import OnboardingButton from "../../components/OnboardingButton";
import WalletAddress from "../../components/WalletAddress";
import NetworkSwitch from "../../components/NetworkSwitch";
import Loader from "../../base/Loader";
// import ChainAddButton from "../../components/ChainAddButton";

export interface PureAccountPageProps {
  connected?: boolean;
  network?: string;
  address?: string | null;
  chainId?: any;
  loading?: boolean;
  owned: Array<any>;
  sold: Array<any>;
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

  if (loading) {
    return <Loader />;
  }

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
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  ].join(" ")}>
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='p-4 sm:p-8 max-w-8xl'>
          <Tab.Panel>
            <UserNftList />
            {/* <div className='mb-4'>
              <h2 className='text-2xl py-2'>Items Created</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                {owned.length === 0 ? (
                  <h1 className='text-2xl'>No assets created</h1>
                ) : (
                  owned.map((item, idx) => (
                    <div
                      key={idx}
                      className='border shadow rounded-xl overflow-hidden'>
                      <img src={item.image} className='rounded' alt='' />
                      <div className='p-4 bg-black'>
                        <p className='text-2xl font-bold text-white'>
                          Price - {item.price}{" "}
                          {(chainId && NATIVE_CURRENCY[chainId]) ||
                            NATIVE_CURRENCY[0]}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div> */}
          </Tab.Panel>

          <Tab.Panel>
            {sold.length && (
              <div className='mt-4'>
                <h2 className='text-2xl py-2'>Items sold</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                  {sold.map((item, idx) => (
                    <div
                      key={idx}
                      className='border shadow rounded-xl overflow-hidden'>
                      <img src={item.image} className='rounded' alt='' />
                      <div className='p-4 bg-black'>
                        <p className='text-2xl font-bold text-white'>
                          Price - {item.price}{" "}
                          {(chainId && NATIVE_CURRENCY[chainId]) ||
                            NATIVE_CURRENCY[0]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Tab.Panel>

          <Tab.Panel className='space-y-8'>
            <WalletAddress address={address} loading={false} />

            <div>
              <h1 className='text-sm uppercase font-medium text-gray-500'>
                {TEXT_NETWORK}
              </h1>
              {connected ? (
                <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
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
              <h1 className='text-sm uppercase font-medium text-gray-500'>
                {TEXT_BALANCE}
              </h1>
              <div className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                {library && (
                  <SWRConfig value={{ fetcher: fetcher(library, new Map(ABIs)) }}>
                    <ChainBalance />
                    <TokenList chainId={chainId} />
                  </SWRConfig>
                )}
              </div>
            </div> */}

            {/* <div>
              <h1 className='text-sm uppercase font-medium text-gray-500'>
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
