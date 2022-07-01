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
  items: [],
};
