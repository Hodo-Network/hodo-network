import { Story, Meta } from "@storybook/react";

import { MenuOpenIcon, MenuOpenIconProps } from "./MenuOpenIcon";

export default {
  title: "Components/MenuOpenIcon",
  component: MenuOpenIcon,
} as Meta;

const Template: Story<MenuOpenIconProps> = (args) => <MenuOpenIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-12 h-12'
};
