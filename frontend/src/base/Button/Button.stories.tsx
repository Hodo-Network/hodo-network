import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Base/Button",
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

export const Accent = Template.bind({});
Accent.args = {
  color: "accent",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
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

export const XSmall = Template.bind({});
XSmall.args = {
  size: "xs",
};

export const Wide = Template.bind({});
Wide.args = {
  shape: "wide",
};

export const Block = Template.bind({});
Block.args = {
  shape: "block",
};

export const Circle = Template.bind({});
Circle.args = {
  shape: "circle",
};

export const Square = Template.bind({});
Square.args = {
  shape: "square",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Glass = Template.bind({});
Glass.args = {
  variant: "glass",
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
  animation: "no-animation",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
