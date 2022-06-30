import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ContentWrapper from "../../ContentWrapper";
import CreateItemForm from "../../components/CreateItemForm";
import Loader from "../../base/Loader";

export interface PureCreatorPageProps {
  loading?: boolean;
}

export const PureCreatorPage = ({
  loading = false,
}: PureCreatorPageProps) => {
  const tabs = ["My Creations", "Create Asset", "Add Collection"];

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
            <h2>No items have been created.</h2>
          </Tab.Panel>

          <Tab.Panel>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Create Asset
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    Coming in Q4. Create your own NFTs tied to a geographical
                    location and list them for sale in the Marketplace. Using
                    the Explore tab, users will be able to see all gNFTs in
                    their area and purchase them from the Marketplace.
                    {/* Submitting this form will upload your image to ipfs and create a new item in your wallet. */}
                  </p>
                </div>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <CreateItemForm />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <h2>
              In the future, you'll be able to submit your own Collection to the
              marketplace.
            </h2>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </ContentWrapper>
  );
};
