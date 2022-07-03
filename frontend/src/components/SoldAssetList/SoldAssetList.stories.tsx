import { Story, Meta } from "@storybook/react";
import { assets } from "../../data/assets";

import { PureSoldAssetList, IPureSoldAssetListProps } from "./SoldAssetList";

export default {
  title: "Components/SoldAssetList",
  component: PureSoldAssetList,
} as Meta;

const Template: Story<IPureSoldAssetListProps> = (args) => (
  <PureSoldAssetList {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
  items: []
};

export const Items = Template.bind({});
Items.args = {
  items: assets.slice(0, 5),
};
