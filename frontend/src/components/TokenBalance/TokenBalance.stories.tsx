import { Story, Meta } from "@storybook/react";

import { PureTokenBalance, IPureTokenBalanceProps } from "./TokenBalance";

export default {
  title: "Components/TokenBalance",
  component: PureTokenBalance,
} as Meta;

const Template: Story<IPureTokenBalanceProps> = (args) => <PureTokenBalance {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Balance = Template.bind({});
Balance.args = {
  balance: "500",
};

export const Symbol = Template.bind({});
Symbol.args = {
  symbol: "WAVAX",
};
