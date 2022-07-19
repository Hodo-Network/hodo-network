import { Story, Meta } from "@storybook/react";

import { FaqView } from "./FaqView";

export default {
  title: "Views/FaqView",
  component: FaqView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => <FaqView {...args} />;

export const Default = Template.bind({});
Default.args = {};
