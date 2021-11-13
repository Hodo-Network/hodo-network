import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PureCollectionGrid,
  PureCollectionGridProps,
} from "./CollectionGrid";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionGrid",
  component: PureCollectionGrid,
} as Meta;

const Template: Story<PureCollectionGridProps> = (args) => (
  <PureCollectionGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: collections,
};
