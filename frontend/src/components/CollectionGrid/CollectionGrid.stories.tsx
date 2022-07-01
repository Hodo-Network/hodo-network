import { Story, Meta } from "@storybook/react";

import {
  CollectionGrid,
  CollectionGridProps,
} from "./CollectionGrid";
import { collections } from "../../data/collections";

export default {
  title: "Components/CollectionGrid",
  component: CollectionGrid,
} as Meta;

const Template: Story<CollectionGridProps> = (args) => (
  <CollectionGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: collections,
};
