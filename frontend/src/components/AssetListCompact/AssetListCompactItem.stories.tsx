import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import {
  AssetListCompactItem,
  IAssetListCompactItemProps,
} from './AssetListCompactItem';

export default {
  title: 'Components/AssetListCompactItem',
  component: AssetListCompactItem,
} as Meta;

const Template: Story<IAssetListCompactItemProps> = (args) => (
  <AssetListCompactItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: assets[0],
};

export const Active = Template.bind({});
Active.args = {
  item: assets[0],
  active: true,
};
