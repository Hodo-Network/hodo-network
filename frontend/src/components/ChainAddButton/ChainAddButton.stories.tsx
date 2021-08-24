import React from "react";
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
Default.args = {
  label: "Add Network",
};
