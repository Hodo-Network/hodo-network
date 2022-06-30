import { Story, Meta } from "@storybook/react";

import { PureBadge, PureBadgeProps } from "./Badge";

export default {
  title: "UI/Badge",
  component: PureBadge,
  argTypes: {
    color: {
      options: ["gray", "red", "yellow", "blue"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<PureBadgeProps> = (args) => <PureBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Badge",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Badge",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  label: "Badge",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Badge",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Badge",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Badge",
  color: "secondary",
};

export const Accent = Template.bind({});
Accent.args = {
  label: "Badge",
  color: "accent",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Badge",
  color: "ghost",
};

export const Info = Template.bind({});
Info.args = {
  label: "Badge",
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  label: "Badge",
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Badge",
  color: "warning",
};

export const Error = Template.bind({});
Error.args = {
  label: "Badge",
  color: "error",
};
