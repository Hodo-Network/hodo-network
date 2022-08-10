import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { AssetListItem, AssetListItemProps } from './AssetListItem';

export default {
  title: 'Components/AssetListItem',
  component: AssetListItem,
} as Meta;

const Template: Story<AssetListItemProps> = (args) => (
  <AssetListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: assets[0],
};
