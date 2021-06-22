import React from "react";
import { Story, Meta } from "@storybook/react";

import { RarityBadge, RarityBadgeProps } from "./RarityBadge";

export default {
  title: "Components/RarityBadge",
  component: RarityBadge,
} as Meta;

const Template: Story<RarityBadgeProps> = (args) => <RarityBadge {...args} />;

export const Common = Template.bind({});
Common.args = {
  rarity: "common",
};

export const Rare = Template.bind({});
Rare.args = {
  rarity: "rare",
};

export const Epic = Template.bind({});
Epic.args = {
  rarity: "epic",
};
