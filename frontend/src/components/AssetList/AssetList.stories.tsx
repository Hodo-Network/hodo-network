import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { AssetList, AssetListProps } from './AssetList';

export default {
  title: 'Components/AssetList',
  component: AssetList,
} as Meta;

const Template: Story<AssetListProps> = (args) => <AssetList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 5),
};
