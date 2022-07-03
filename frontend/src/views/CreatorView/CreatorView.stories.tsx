import { Story, Meta } from "@storybook/react";

import { PureCreatorView } from "./CreatorView";

export default {
  title: "Views/CreatorView",
  component: PureCreatorView,
} as Meta;

const Template: Story = (args) => <PureCreatorView {...args} />;

export const Default = Template.bind({});
Default.args = {};
