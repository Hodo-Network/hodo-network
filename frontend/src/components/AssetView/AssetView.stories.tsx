import { Story, Meta } from "@storybook/react";

import { PureAssetView, PureAssetViewProps } from "./AssetView";

export default {
  title: "Pages/AssetView",
  component: PureAssetView,
} as Meta;

const Template: Story<PureAssetViewProps> = (args) => (
  <PureAssetView {...args} />
);

export const Default = Template.bind({});
Default.args = {};
