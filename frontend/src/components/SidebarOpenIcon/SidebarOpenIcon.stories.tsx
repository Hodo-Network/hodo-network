import { Story, Meta } from "@storybook/react";

import { SidebarOpenIcon } from "./SidebarOpenIcon";

export default {
  title: "Components/SidebarOpenIcon",
  component: SidebarOpenIcon,
} as Meta;

const Template: Story = (args) => <SidebarOpenIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-12 h-12'
};
