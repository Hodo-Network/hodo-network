import { Story, Meta } from "@storybook/react";

import { MenuOpenIcon } from "./MenuOpenIcon";

export default {
  title: "Components/MenuOpenIcon",
  component: MenuOpenIcon,
} as Meta;

const Template: Story = (args) => <MenuOpenIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-12 h-12'
};
