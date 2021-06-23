import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  CollectionCardList,
  CollectionCardListProps,
} from "./CollectionCardList";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionCardList",
  component: CollectionCardList,
} as Meta;

const Template: Story<CollectionCardListProps> = (args) => (
  <CollectionCardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: collections,
};
