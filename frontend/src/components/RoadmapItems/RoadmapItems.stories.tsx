import { Meta, Story } from '@storybook/react';

import { roadmap } from '../../data/roadmap';
import { RoadmapItems, RoadmapItemsProps } from './RoadmapItems';

export default {
  title: 'Components/RoadmapItems',
  component: RoadmapItems,
} as Meta;

const Template: Story<RoadmapItemsProps> = (args) => <RoadmapItems {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: roadmap,
};
