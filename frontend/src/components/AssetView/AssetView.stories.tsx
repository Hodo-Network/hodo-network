import { Story, Meta } from "@storybook/react";

import { PureAssetView, PureAssetViewProps } from "./AssetView";
import { ZERO_ADDRESS } from "../../constants";
import { assets } from "../../data/assets";
import { collections } from "../../data/collections";

export default {
  title: "Components/AssetView",
  component: PureAssetView,
} as Meta;

const Template: Story<PureAssetViewProps> = (args) => (
  <PureAssetView {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithItemAndCollection = Template.bind({});
WithItemAndCollection.args = {
  item: assets[0],
  collection: collections.find(collection => collection.contractAddress === assets[0].contractAddress)
};

export const OwnedByAddress = Template.bind({});
OwnedByAddress.args = {
  item: assets[0],
  collection: collections.find(collection => collection.contractAddress === assets[0].contractAddress),
  account: '0x00'
};

export const OwnedByYou = Template.bind({});
OwnedByYou.args = {
  item: assets[0],
  collection: collections.find(collection => collection.contractAddress === assets[0].contractAddress),
  account: assets[0].owner_address
};
