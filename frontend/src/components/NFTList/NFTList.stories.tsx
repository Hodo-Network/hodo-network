import React from "react";
import { Story, Meta } from "@storybook/react";

import { NFTList, NFTListProps } from "./NFTList";

export default {
  title: "Components/NFTList",
  component: NFTList,
} as Meta;

const Template: Story<NFTListProps> = (args) => <NFTList {...args} />;

export const Default = Template.bind({});
Default.args = {};
