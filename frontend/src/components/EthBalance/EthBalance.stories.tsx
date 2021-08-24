import React from "react";
import { Story, Meta } from "@storybook/react";

import { EthBalance } from "./EthBalance";

export default {
  title: "Components/EthBalance",
  component: EthBalance,
} as Meta;

const Template: Story = (args) => <EthBalance {...args} />;

export const Default = Template.bind({});
Default.args = {};
