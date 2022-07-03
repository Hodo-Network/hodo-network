import { Story, Meta } from "@storybook/react";

import { AssetListCompact, AssetListCompactProps } from "./AssetListCompact";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetListCompact",
  component: AssetListCompact,
} as Meta;

const Template: Story<AssetListCompactProps> = (args) => (
  <AssetListCompact {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 10),
};
