import { Story, Meta } from "@storybook/react";
import { NETWORK_LABELS, ZERO_ADDRESS } from "../../constants";
import { assets } from "../../data/assets";

import { PureAccountView, PureAccountViewProps } from "./AccountView";

export default {
  title: "Views/AccountView",
  component: PureAccountView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PureAccountViewProps> = (args) => (
  <PureAccountView {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Connected = Template.bind({});
Connected.args = {
  owned: assets.filter(asset => !asset.sold && asset.owner_address === ZERO_ADDRESS),
  sold: assets.filter(asset => asset.sold && asset.owner_address === ZERO_ADDRESS),
  connected: true,
  network: NETWORK_LABELS[43114],
  address: ZERO_ADDRESS,
  chainId: 43114,
};