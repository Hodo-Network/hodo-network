import { Story, Meta } from "@storybook/react";

import { AssetListItem, AssetListItemProps } from "./AssetListItem";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetListItem",
  component: AssetListItem,
} as Meta;

const Template: Story<AssetListItemProps> = (args) => <AssetListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: assets[0],
};
