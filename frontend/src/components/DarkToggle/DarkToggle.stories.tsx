import { Story, Meta } from "@storybook/react";

import { DarkToggle } from "./DarkToggle";

export default {
  title: "Components/DarkToggle",
  component: DarkToggle,
} as Meta;

const Template: Story = (args) => <DarkToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
