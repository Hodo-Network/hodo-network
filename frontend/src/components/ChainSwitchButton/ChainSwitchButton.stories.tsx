import React from "react";
import { Story, Meta } from "@storybook/react";

import { ChainSwitchButton, ChainSwitchButtonProps } from "./ChainSwitchButton";

export default {
  title: "Components/ChainSwitchButton",
  component: ChainSwitchButton,
} as Meta;

const Template: Story<ChainSwitchButtonProps> = (args) => (
  <ChainSwitchButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Switch to Network",
  disabled: false,
  params: {
    chainId: 4,
  },
};
