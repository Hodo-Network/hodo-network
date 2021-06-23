import React from "react";
import { Story, Meta } from "@storybook/react";

import { Logo, LogoProps } from "./Logo";
import { Marker } from "../../assets";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: Marker,
  alt: "Logo",
};
