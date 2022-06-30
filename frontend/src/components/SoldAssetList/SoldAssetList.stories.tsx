import { Story, Meta } from "@storybook/react";

import { PureSoldAssetList, PureSoldAssetListProps } from "./SoldAssetList";

export default {
  title: "Components/SoldAssetList",
  component: PureSoldAssetList,
} as Meta;

const Template: Story<PureSoldAssetListProps> = (args) => (
  <PureSoldAssetList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
