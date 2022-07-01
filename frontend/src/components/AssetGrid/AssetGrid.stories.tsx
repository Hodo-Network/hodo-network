import { Story, Meta } from "@storybook/react";

import { AssetGrid, AssetGridProps } from "./AssetGrid";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetGrid",
  component: AssetGrid,
} as Meta;

const Template: Story<AssetGridProps> = (args) => <AssetGrid {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  items: [],
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const Default = Template.bind({});
Default.args = {
  items: assets.splice(0, 5),
};
