import { Story, Meta } from "@storybook/react";

import { AssetList, AssetListProps } from "./AssetList";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetList",
  component: AssetList,
} as Meta;

const Template: Story<AssetListProps> = (args) => (
  <AssetList {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 5),
};
