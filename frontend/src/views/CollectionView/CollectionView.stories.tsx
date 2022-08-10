import { Meta, Story } from '@storybook/react';
import { assets } from '../../data/assets';

import { PureCollectionView, PureCollectionViewProps } from './CollectionView';

export default {
  title: 'Views/CollectionView',
  component: PureCollectionView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PureCollectionViewProps> = (args) => (
  <PureCollectionView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [],
};

export const Assets = Template.bind({});
Assets.args = {
  items: assets.slice(0, 5),
};
