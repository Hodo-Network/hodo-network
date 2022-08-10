import { Meta, Story } from '@storybook/react';

import { ZERO_ADDRESS } from '../../constants';
import { ConnectionBadge, ConnectionBadgeProps } from './ConnectionBadge';

export default {
  title: 'Components/ConnectionBadge',
  component: ConnectionBadge,
} as Meta;

const Template: Story<ConnectionBadgeProps> = (args) => (
  <ConnectionBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  network: 'Ethereum',
  account: ZERO_ADDRESS,
};

export const OtherNetwork = Template.bind({});
OtherNetwork.args = {
  network: 'Fuji',
  account: ZERO_ADDRESS,
};
