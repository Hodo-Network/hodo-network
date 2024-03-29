import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureAssetList, PureAssetListProps } from "./AssetList";

export default {
  title: "Components/AssetList",
  component: PureAssetList,
} as Meta;

const Template: Story<PureAssetListProps> = (args) => (
  <PureAssetList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [],
  loading: false
};

export const Loading = Template.bind({});
Loading.args = {
  items: [],
  loading: true
};
