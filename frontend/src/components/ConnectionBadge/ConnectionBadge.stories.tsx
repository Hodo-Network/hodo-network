import { Story, Meta } from "@storybook/react";

import { ConnectionBadge, ConnectionBadgeProps } from "./ConnectionBadge";
import { ZERO_ADDRESS } from "../../constants";

export default {
  title: "Components/ConnectionBadge",
  component: ConnectionBadge,
} as Meta;

const Template: Story<ConnectionBadgeProps> = (args) => (
  <ConnectionBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  network: "Ethereum",
  account: ZERO_ADDRESS,
};

export const OtherNetwork = Template.bind({});
OtherNetwork.args = {
  network: "Fuji",
  account: ZERO_ADDRESS,
};
