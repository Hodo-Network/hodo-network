import { Story, Meta } from "@storybook/react";

import { PureFeaturedPanel, PureFeaturedPanelProps } from "./FeaturedPanel";

export default {
  title: "Components/FeaturedPanel",
  component: PureFeaturedPanel,
} as Meta;

const Template: Story<PureFeaturedPanelProps> = (args) => (
  <PureFeaturedPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: "/",
  title: "Featured NFTs",
  items: []
};
