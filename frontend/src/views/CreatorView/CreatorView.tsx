import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import CreateItemForm from '../../components/CreateItemForm';
import ContentWrapper from '../../ContentWrapper';

export const PureCreatorView = () => {
  const tabs = ['My Creations', 'Create Asset', 'Add Collection'];

  return (
    <ContentWrapper>
      <Tab.Group>
        <Tab.List className='border-b border-base-content'>
          {tabs.map((tab, idx) => (
            <Tab as={Fragment} key={idx}>
              {({ selected }) => (
                <button
                  className={[
                    'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm',
                    selected
                      ? 'border-primary-content text-base-content'
                      : 'border-transparent text-bc-muted hover:text-base-content hover:border-primary-content',
                  ].join(' ')}>
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='p-4 sm:p-8 max-w-8xl'>
          <Tab.Panel>
            <p>No items have been created.</p>
          </Tab.Panel>

          <Tab.Panel>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0 space-y-2'>
                  <h3 className='text-sm uppercase font-medium text-bc-muted'>
                    Create Asset
                  </h3>
                  <p className='overflow-hidden overflow-ellipsis'>
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
            <p>
              In the future, you'll be able to submit your own Collection to the
              marketplace.
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </ContentWrapper>
  );
};
