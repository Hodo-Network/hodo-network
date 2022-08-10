import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { AssetCard, AssetCardProps } from './AssetCard';
// import { collections } from "../../data/collections";

const verifiedSoldAsset = assets.find(
  (asset) => asset.contractVerified && asset.sold
);
// const verifiedSoldCollection = collections.find(collection => collection.contractAddress === verifiedSoldAsset?.contractAddress);
const notVerifiedSoldAsset = assets.find(
  (asset) => !asset.contractVerified && asset.sold
);
// const notVerifiedSoldCollection = collections.find(collection => collection.contractAddress === notVerifiedSoldAsset?.contractAddress);
const forSaleVerifiedAsset = assets.find(
  (asset) => !asset.sold && asset.contractVerified
);
// const forSaleVerifiedCollection = collections.find(collection => collection.contractAddress === forSaleVerifiedAsset?.contractAddress);
const forSaleNotVerifiedAsset = assets.find(
  (asset) => !asset.sold && !asset.contractVerified
);
// const forSaleNotVerifiedCollection = collections.find(collection => collection.contractAddress === forSaleNotVerifiedAsset?.contractAddress);

export default {
  title: 'Components/AssetCard',
  component: AssetCard,
} as Meta;

const Template: Story<AssetCardProps> = (args) => <AssetCard {...args} />;

export const ContractVerified = Template.bind({});
ContractVerified.args = {
  item: verifiedSoldAsset,
  // collection: verifiedSoldCollection,
};

export const ContractNotVerified = Template.bind({});
ContractNotVerified.args = {
  item: notVerifiedSoldAsset,
  // collection: notVerifiedSoldCollection,
};

export const ForSaleAndVerified = Template.bind({});
ForSaleAndVerified.args = {
  item: forSaleVerifiedAsset,
  // collection: forSaleVerifiedCollection,
};

export const ForSaleAndNotVerified = Template.bind({});
ForSaleAndNotVerified.args = {
  item: forSaleNotVerifiedAsset,
  // collection: forSaleNotVerifiedCollection,
};
