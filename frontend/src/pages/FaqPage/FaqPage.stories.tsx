import { Story, Meta } from "@storybook/react";

import { FaqPage } from "./FaqPage";

export default {
  title: "Pages/FaqPage",
  component: FaqPage,
} as Meta;

const Template: Story = (args) => <FaqPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
