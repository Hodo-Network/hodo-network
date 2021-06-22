import React from "react";
import { Story, Meta } from "@storybook/react";

import { Alert, AlertProps } from "./Alert";

export default {
  title: "UI/Alert",
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  hidden: false,
  message: "This is a sample Alert",
  status: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  hidden: false,
  message: "This is a sample Alert",
  status: "warning",
};

export const Error = Template.bind({});
Error.args = {
  hidden: false,
  message: "This is a sample Alert",
  status: "error",
};
