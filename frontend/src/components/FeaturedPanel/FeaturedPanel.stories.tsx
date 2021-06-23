import React from "react";
import { Story, Meta } from "@storybook/react";

import { FeaturedPanel, FeaturedPanelProps } from "./FeaturedPanel";
import { collectibles } from "../../data";
import routes from "../../routes";

export default {
  title: "Components/FeaturedPanel",
  component: FeaturedPanel,
} as Meta;

const Template: Story<FeaturedPanelProps> = (args) => (
  <FeaturedPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "country",
  title: "Featured NFTs",
};
