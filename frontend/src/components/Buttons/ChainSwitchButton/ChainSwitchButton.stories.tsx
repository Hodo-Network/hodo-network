import { Story, Meta } from "@storybook/react";

import { PureChainSwitchButton, PureChainSwitchButtonProps } from "./ChainSwitchButton";

export default {
  title: "Components/Buttons/ChainSwitchButton",
  component: PureChainSwitchButton,
} as Meta;

const Template: Story<PureChainSwitchButtonProps> = (args) => (
  <PureChainSwitchButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
