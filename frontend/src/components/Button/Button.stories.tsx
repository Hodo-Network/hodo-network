import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};
