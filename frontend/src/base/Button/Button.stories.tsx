import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};
