import { Story, Meta } from "@storybook/react";

import { AssetGrid, AssetGridProps } from "./AssetGrid";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetGrid",
  component: AssetGrid,
} as Meta;

const Template: Story<AssetGridProps> = (args) => <AssetGrid {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 5),
};
