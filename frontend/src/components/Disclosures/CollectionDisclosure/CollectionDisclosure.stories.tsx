import { Meta, Story } from '@storybook/react';
import { ZERO_ADDRESS } from '../../../constants';
import { assets } from '../../../data/assets';
import { collections } from '../../../data/collections';

import {
  CollectionDisclosure,
  ICollectionDisclosureProps,
} from './CollectionDisclosure';

export default {
  title: 'Components/Disclosures/CollectionDisclosure',
  component: CollectionDisclosure,
} as Meta;

const Template: Story<ICollectionDisclosureProps> = (args) => (
  <CollectionDisclosure {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  contractAddress: ZERO_ADDRESS,
  collectionAssets: [],
};

export const HasAssets = Template.bind({});
HasAssets.args = {
  contractAddress: collections[1].contractAddress,
  collectionAssets: assets.filter(
    (asset) => collections[1].contractAddress === asset.contractAddress
  ),
};
