import { Story, Meta } from "@storybook/react";

import { PureUserNftList, PureUserNftListProps } from "./UserNftList";

export default {
  title: "Pages/UserNftList",
  component: PureUserNftList,
} as Meta;

const Template: Story<PureUserNftListProps> = (args) => (
  <PureUserNftList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  loading: false,
  items: [],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  items: [],
};
