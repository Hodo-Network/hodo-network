import { Meta, Story } from '@storybook/react';

import { PureChainInfo, PureChainInfoProps } from './ChainInfo';

export default {
  title: 'Components/ChainInfo',
  component: PureChainInfo,
} as Meta;

const Template: Story<PureChainInfoProps> = (args) => (
  <PureChainInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {};
