import { Story, Meta } from "@storybook/react";

import { PureNetworkSwitch } from "./NetworkSwitch";

export default {
  title: "Components/NetworkSwitch",
  component: PureNetworkSwitch,
} as Meta;

const Template: Story = (args) => <PureNetworkSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  chainId: 1,
};

export const Avalanche = Template.bind({});
Avalanche.args = {
  chainId: 43114,
};

export const Fuji = Template.bind({});
Fuji.args = {
  chainId: 43113,
};
