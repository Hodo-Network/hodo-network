import React from "react";
import { Story, Meta } from "@storybook/react";

import { NFTCard, NFTCardProps } from "./NFTCard";

export default {
  title: "Components/NFTCard",
  component: NFTCard,
} as Meta;

const Template: Story<NFTCardProps> = (args) => <NFTCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
