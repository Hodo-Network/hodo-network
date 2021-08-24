import React from "react";
import { Story, Meta } from "@storybook/react";

import { FeaturedNfts, FeaturedNftsProps } from "./FeaturedNfts";
import { collectibles } from "../../data/collectibles";

export default {
  title: "Components/FeaturedNfts",
  component: FeaturedNfts,
} as Meta;

const Template: Story<FeaturedNftsProps> = (args) => <FeaturedNfts {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  items: [],
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  items: [],
};

export const Default = Template.bind({});
Default.args = {
  loading: false,
  items: collectibles.splice(0, 5),
};
