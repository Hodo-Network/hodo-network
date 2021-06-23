import React from "react";
import { Story, Meta } from "@storybook/react";

import { CollectionCard, CollectionCardProps } from "./CollectionCard";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionCard",
  component: CollectionCard,
  decorators: [
    (Story) => (
      <div className='w-72'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CollectionCardProps> = (args) => (
  <CollectionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  collection: collections[0],
};
