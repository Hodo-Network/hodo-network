import React from "react";
import { Story, Meta } from "@storybook/react";

import { SiteAlert } from "./SiteAlert";

export default {
  title: "Components/SiteAlert",
  component: SiteAlert,
} as Meta;

const Template: Story = (args) => <SiteAlert {...args} />;

export const Default = Template.bind({});
Default.args = {};
