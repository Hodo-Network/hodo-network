import React from "react";
import { Story, Meta } from "@storybook/react";

import { NetworkSwitch } from "./NetworkSwitch";

export default {
  title: "Components/NetworkSwitch",
  component: NetworkSwitch,
} as Meta;

const Template: Story = (args) => <NetworkSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {};
