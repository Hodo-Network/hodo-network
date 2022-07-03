import { Story, Meta } from '@storybook/react';

import { SidebarIconSwap, ISidebarIconSwap } from './SidebarIconSwap';

export default {
  title: "Components/SidebarIconSwap",
  component: SidebarIconSwap,
} as Meta;

const Template: Story<ISidebarIconSwap> = (args) => <SidebarIconSwap {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
