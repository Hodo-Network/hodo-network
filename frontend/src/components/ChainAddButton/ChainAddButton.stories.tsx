import { Story, Meta } from "@storybook/react";

import { PureChainAddButton, PureChainAddButtonProps } from "./ChainAddButton";

export default {
  title: "Components/ChainAddButton",
  component: PureChainAddButton,
} as Meta;

const Template: Story<PureChainAddButtonProps> = (args) => (
  <PureChainAddButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
