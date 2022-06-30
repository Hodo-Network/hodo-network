import { Story, Meta } from "@storybook/react";

import {
  NetworkErrorMessage,
  NetworkErrorMessageProps,
} from "./NetworkErrorMessage";

export default {
  title: "Components/NetworkErrorMessage",
  component: NetworkErrorMessage,
} as Meta;

const Template: Story<NetworkErrorMessageProps> = (args) => (
  <NetworkErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
