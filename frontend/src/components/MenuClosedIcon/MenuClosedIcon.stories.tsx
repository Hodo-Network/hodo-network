import { Story, Meta } from "@storybook/react";

import { MenuClosedIcon } from "./MenuClosedIcon";

export default {
  title: "Components/MenuClosedIcon",
  component: MenuClosedIcon,
} as Meta;

const Template: Story = (args) => (
  <MenuClosedIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-12 h-12'
};
