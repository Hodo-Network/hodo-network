import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PureCollectionCardList,
  PureCollectionCardListProps,
} from "./CollectionCardList";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionCardList",
  component: PureCollectionCardList,
} as Meta;

const Template: Story<PureCollectionCardListProps> = (args) => (
  <PureCollectionCardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: collections,
};
