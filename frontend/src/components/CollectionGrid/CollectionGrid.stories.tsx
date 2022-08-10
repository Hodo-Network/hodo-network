import { Meta, Story } from '@storybook/react';

import { collections } from '../../data/collections';
import { CollectionGrid, CollectionGridProps } from './CollectionGrid';

export default {
  title: 'Components/CollectionGrid',
  component: CollectionGrid,
} as Meta;

const Template: Story<CollectionGridProps> = (args) => (
  <CollectionGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: collections,
};
