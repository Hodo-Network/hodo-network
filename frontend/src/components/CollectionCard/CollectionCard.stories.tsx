import { Story, Meta } from "@storybook/react";

import { PureCollectionCard, PureCollectionCardProps } from "./CollectionCard";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionCard",
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
  collection: collections[0],
};
