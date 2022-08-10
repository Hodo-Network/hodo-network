import { Meta, Story } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
