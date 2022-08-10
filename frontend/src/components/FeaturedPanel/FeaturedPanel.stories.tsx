import { Meta, Story } from '@storybook/react';
import { assets } from '../../data/assets';

import { PureFeaturedPanel, PureFeaturedPanelProps } from './FeaturedPanel';

export default {
  title: 'Components/FeaturedPanel',
  component: PureFeaturedPanel,
} as Meta;

const Template: Story<PureFeaturedPanelProps> = (args) => (
  <PureFeaturedPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: '/',
  title: 'Featured Assets',
  items: [],
};

export const WithAssets = Template.bind({});
WithAssets.args = {
  url: '/',
  title: 'Featured Assets',
  items: assets.slice(0, 5),
};
