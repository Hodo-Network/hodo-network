import { Story, Meta } from "@storybook/react";
import { collections } from "../../data/collections";

import { IHomeViewProps, PureHomeView } from "./HomeView";

export default {
  title: "Views/HomeView",
  component: PureHomeView,
} as Meta;

const Template: Story<IHomeViewProps> = (args) => <PureHomeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: collections.slice(0, 5)
};