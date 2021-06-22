import React from "react";
import { Story, Meta } from "@storybook/react";

import { Badge, BadgeProps } from "./Badge";

export default {
  title: "UI/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ['gray', 'red', 'yellow', 'blue'],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Badge",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Badge",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Badge",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Badge",
};

export const Gray = Template.bind({});
Gray.args = {
  label: "Badge",
  color: "gray",
};

export const Red = Template.bind({});
Red.args = {
  label: "Badge",
  color: "red",
};

export const Yellow = Template.bind({});
Yellow.args = {
  label: "Badge",
  color: "yellow",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Badge",
  color: "blue",
};
