import { Story, Meta } from "@storybook/react";

import { ConnectWallet, ConnectWalletProps } from "./ConnectWallet";

export default {
  title: "Components/ConnectWallet",
  component: ConnectWallet,
} as Meta;

const Template: Story<ConnectWalletProps> = (args) => (
  <ConnectWallet {...args} />
);

export const Default = Template.bind({});
Default.args = {};
