import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureAssetListItem, PureAssetListItemProps } from "./AssetListItem";

export default {
  title: "Components/AssetListItem",
  component: PureAssetListItem,
} as Meta;

const Template: Story<PureAssetListItemProps> = (args) => <PureAssetListItem {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   nft: "",
//   collection: "",
//   listing: "",
// };
