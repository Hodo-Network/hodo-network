import React from "react";
import { Story, Meta } from "@storybook/react";

import { TokenBalance, TokenBalanceProps } from "./TokenBalance";

export default {
  title: "Components/TokenBalance",
  component: TokenBalance,
} as Meta;

const Template: Story<TokenBalanceProps> = (args) => <TokenBalance {...args} />;

export const Default = Template.bind({});
Default.args = {
  symbol: "WAVAX",
  address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  decimals: 18,
};
