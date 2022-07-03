import { Story, Meta } from "@storybook/react";
import { NATIVE_CURRENCY } from "../../constants";

import { PureChainBalance, IPureChainBalanceProps } from "./ChainBalance";

export default {
  title: "Components/ChainBalance",
  component: PureChainBalance,
} as Meta;

const Template: Story<IPureChainBalanceProps> = (args) => <PureChainBalance {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Balance = Template.bind({});
Balance.args = {
  balance: 500,
};

export const Currency = Template.bind({});
Currency.args = {
  symbol: NATIVE_CURRENCY[1],
};