import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureNFTList, PureNFTListProps } from "./NFTList";

export default {
  title: "Components/NFTList",
  component: PureNFTList,
} as Meta;

const Template: Story<PureNFTListProps> = (args) => <PureNFTList {...args} />;

export const Default = Template.bind({});
Default.args = {};
