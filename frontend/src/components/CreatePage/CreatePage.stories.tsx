import React from "react";
import { Story, Meta } from "@storybook/react";

import { CreatePage } from "./CreatePage";

export default {
  title: "Pages/CreatePage",
  component: CreatePage,
} as Meta;

const Template: Story = (args) => <CreatePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
