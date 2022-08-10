import { Meta, Story } from '@storybook/react';

import { ZERO_ADDRESS } from '../../constants';
import { WalletAddress, WalletAddressProps } from './WalletAddress';

export default {
  title: 'Components/WalletAddress',
  component: WalletAddress,
} as Meta;

const Template: Story<WalletAddressProps> = (args) => (
  <WalletAddress {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Address = Template.bind({});
Address.args = {
  address: ZERO_ADDRESS,
};
