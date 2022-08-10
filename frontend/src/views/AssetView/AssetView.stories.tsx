import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { collections } from '../../data/collections';
import { PureAssetView, PureAssetViewProps } from './AssetView';

export default {
  title: 'Views/AssetView',
  component: PureAssetView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PureAssetViewProps> = (args) => (
  <PureAssetView {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithItemAndCollection = Template.bind({});
WithItemAndCollection.args = {
  item: assets[1],
  collection: collections.find(
    (collection) => collection.contractAddress === assets[1].contractAddress
  ),
};

export const OwnedByAddress = Template.bind({});
OwnedByAddress.args = {
  item: assets[1],
  collection: collections.find(
    (collection) => collection.contractAddress === assets[1].contractAddress
  ),
  account: '0x00',
};

export const OwnedByYou = Template.bind({});
OwnedByYou.args = {
  item: assets[1],
  collection: collections.find(
    (collection) => collection.contractAddress === assets[1].contractAddress
  ),
  account: assets[1].owner_address,
};

export const WithCollectionAssets = Template.bind({});
WithCollectionAssets.args = {
  item: assets[1],
  collection: collections.find(
    (collection) => collection.contractAddress === assets[1].contractAddress
  ),
  account: '0x00',
  collectionAssets: assets.filter(
    (asset) => asset.contractAddress === assets[1].contractAddress
  ),
  contractAddress: assets[1].contractAddress,
};
