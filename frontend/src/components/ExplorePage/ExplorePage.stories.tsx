import React from "react";
import { Story, Meta } from "@storybook/react";

import { ExplorePage } from "./ExplorePage";

export default {
  title: "Pages/ExplorePage",
  component: ExplorePage,
} as Meta;

const Template: Story = (args) => <ExplorePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
