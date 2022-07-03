import { Story, Meta } from "@storybook/react";

import { SidebarCloseIcon } from "./SidebarCloseIcon";

export default {
  title: "Components/SidebarCloseIcon",
  component: SidebarCloseIcon,
} as Meta;

const Template: Story = (args) => (
  <SidebarCloseIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-12 h-12'
};
