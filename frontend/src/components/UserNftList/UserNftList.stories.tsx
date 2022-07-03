import { Story, Meta } from "@storybook/react";
import { assets } from "../../data/assets";

import { PureUserNftList, IPureUserNftListProps } from "./UserNftList";

export default {
  title: "Components/UserNftList",
  component: PureUserNftList,
} as Meta;

const Template: Story<IPureUserNftListProps> = (args) => (
  <PureUserNftList {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {
  items: []
};

export const Items = Template.bind({});
Items.args = {
  items: assets.slice(0, 5),
};
