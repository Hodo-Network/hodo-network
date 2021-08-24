import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PureCollectionSelect,
  PureCollectionSelectProps,
} from "./CollectionSelect";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionSelect",
  component: PureCollectionSelect,
} as Meta;

const Template: Story<PureCollectionSelectProps> = (args) => (
  <PureCollectionSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  collections: collections,
};
