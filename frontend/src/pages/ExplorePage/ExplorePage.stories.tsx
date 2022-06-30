import { Story, Meta } from "@storybook/react";

import { assets } from "../../data/assets";
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
  items: assets,
};
