import { Story, Meta } from '@storybook/react';

import { MenuIconSwap, IMenuIconSwap } from './MenuIconSwap';

export default {
  title: "Components/MenuIconSwap",
  component: MenuIconSwap,
} as Meta;

const Template: Story<IMenuIconSwap> = (args) => <MenuIconSwap {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  active: true
};
