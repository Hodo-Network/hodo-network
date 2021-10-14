import React from "react";
import { Story, Meta } from "@storybook/react";

import { collectibles } from "../../data";
import { PureExplorePage, PureExplorePageProps } from "./ExplorePage";

export default {
  title: "Pages/ExplorePage",
  component: PureExplorePage,
} as Meta;

const Template: Story<PureExplorePageProps> = (args) => (
  <PureExplorePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: collectibles,
};
