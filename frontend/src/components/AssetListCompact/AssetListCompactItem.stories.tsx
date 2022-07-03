import { Story, Meta } from "@storybook/react";

import { AssetListCompactItem, IAssetListCompactItemProps } from "./AssetListCompactItem";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetListCompactItem",
  component: AssetListCompactItem,
} as Meta;

const Template: Story<IAssetListCompactItemProps> = (args) => (
  <AssetListCompactItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: assets[0],
};

export const Active = Template.bind({});
Active.args = {
  item: assets[0],
  active: true,
};
