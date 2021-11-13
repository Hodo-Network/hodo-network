import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureAccountPage, PureAccountPageProps } from "./AccountPage";

export default {
  title: "Pages/AccountPage",
  component: PureAccountPage,
} as Meta;

const Template: Story<PureAccountPageProps> = (args) => (
  <PureAccountPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
