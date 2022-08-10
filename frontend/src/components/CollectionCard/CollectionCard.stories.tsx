import { Meta, Story } from '@storybook/react';

import { collections } from '../../data/collections';
import { PureCollectionCard, PureCollectionCardProps } from './CollectionCard';

export default {
  title: 'Components/CollectionCard',
  component: PureCollectionCard,
  decorators: [
    (Story) => (
      <div className='w-72'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PureCollectionCardProps> = (args) => (
  <PureCollectionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: collections[0],
};

export const VerifiedCollection = Template.bind({});
VerifiedCollection.args = {
  item: collections[1],
};
