import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { AssetListCompact, AssetListCompactProps } from './AssetListCompact';

export default {
  title: 'Components/AssetListCompact',
  component: AssetListCompact,
} as Meta;

const Template: Story<AssetListCompactProps> = (args) => (
  <AssetListCompact {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 10),
};
