import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { AssetGrid, AssetGridProps } from './AssetGrid';

export default {
  title: 'Components/AssetGrid',
  component: AssetGrid,
} as Meta;

const Template: Story<AssetGridProps> = (args) => <AssetGrid {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: assets.slice(0, 5),
};
