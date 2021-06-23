import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavbarProps } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    hideTitle: {
      control: { type: "boolean" },
    },
  },
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const HideTitle = Template.bind({});
HideTitle.args = {
  hideTitle: true,
};
