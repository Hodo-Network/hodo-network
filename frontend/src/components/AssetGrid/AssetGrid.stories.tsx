import { Story, Meta } from "@storybook/react";

import { PureAssetGrid, PureAssetGridProps } from "./AssetGrid";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetGrid",
  component: PureAssetGrid,
} as Meta;

const Template: Story<PureAssetGridProps> = (args) => <PureAssetGrid {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  items: [],
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  items: [],
};

export const Default = Template.bind({});
Default.args = {
  loading: false,
  items: assets.splice(0, 5),
};
