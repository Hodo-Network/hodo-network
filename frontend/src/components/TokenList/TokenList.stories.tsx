import { Meta, Story } from '@storybook/react';

import { TOKENS_BY_NETWORK } from '../../constants';
import { IPureTokenListProps, PureTokenList } from './TokenList';

export default {
  title: 'Components/TokenList',
  component: PureTokenList,
} as Meta;

const Template: Story<IPureTokenListProps> = (args) => (
  <PureTokenList {...args} />
);

export const Default = Template.bind({});
Default.args = {};

// TODO: fix broken story from nested component
export const Tokens = Template.bind({});
Tokens.args = {
  tokens: TOKENS_BY_NETWORK[43114],
};
