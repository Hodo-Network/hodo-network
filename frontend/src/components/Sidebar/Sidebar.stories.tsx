import { Story, Meta } from "@storybook/react";

import { Sidebar, SidebarProps } from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  title: 'Site Name',
};

export const Mini = Template.bind({});
Mini.args = {
  mini: true,
};
