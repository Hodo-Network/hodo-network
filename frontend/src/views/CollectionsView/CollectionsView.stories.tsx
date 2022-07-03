import { Story, Meta } from "@storybook/react";
import { collections } from "../../data/collections";

import {
  PureCollectionsView, PureCollectionsViewProps,
} from "./CollectionsView";

export default {
  title: "Views/CollectionsView",
  component: PureCollectionsView,
} as Meta;

const Template: Story<PureCollectionsViewProps> = (args) => (
  <PureCollectionsView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: []
};

export const Collections = Template.bind({});
Collections.args = {
  items: collections.slice(0, 5),
};
