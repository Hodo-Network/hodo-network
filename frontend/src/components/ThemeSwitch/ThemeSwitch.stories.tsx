import { Story, Meta } from "@storybook/react";

import { ThemeSwitch } from "./ThemeSwitch";

export default {
  title: "Components/ThemeSwitch",
  component: ThemeSwitch,
} as Meta;

const Template: Story = (args) => <ThemeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {};
