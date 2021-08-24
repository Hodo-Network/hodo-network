import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureAlert, PureAlertProps } from "./Alert";

export default {
  title: "UI/Alert",
  component: PureAlert,
} as Meta;

const Template: Story<PureAlertProps> = (args) => <PureAlert {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: "This is a sample Success",
  status: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a sample Warning",
  status: "warning",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is a sample Error",
  status: "error",
};
