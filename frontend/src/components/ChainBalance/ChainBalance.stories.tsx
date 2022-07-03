import { Story, Meta } from "@storybook/react";
import { NATIVE_CURRENCY } from "../../constants";

import { PureChainBalance } from "./ChainBalance";

export default {
  title: "Components/ChainBalance",
  component: PureChainBalance,
} as Meta;

const Template: Story = (args) => <PureChainBalance {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Balance = Template.bind({});
Balance.args = {
  balance: 500,
};

export const Currency = Template.bind({});
Currency.args = {
  currency: NATIVE_CURRENCY[1],
};