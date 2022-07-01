import { Story, Meta } from "@storybook/react";

import { assets } from "../../data/assets";

import {
  PureMarketplacePage,
  PureMarketplacePageProps,
} from "./MarketplacePage";

export default {
  title: "Pages/MarketplacePage",
  component: PureMarketplacePage,
} as Meta;

const Template: Story<PureMarketplacePageProps> = (args) => (
  <PureMarketplacePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: assets,
};

export const Loading = Template.bind({});
Loading.args = {
  items: assets,
};
