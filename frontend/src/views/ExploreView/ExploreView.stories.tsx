import { Story, Meta } from "@storybook/react";

import { assets } from "../../data/assets";
import { PureExploreView, PureExploreViewProps } from "./ExploreView";

export default {
  title: "Views/ExploreView",
  component: PureExploreView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PureExploreViewProps> = (args) => (
  <PureExploreView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: assets,
};
