import { Meta, Story } from '@storybook/react';

import { Navbar, NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  title: 'Site Name',
};

export const HideTitle = Template.bind({});
HideTitle.args = {
  title: 'Site Name',
  hideTitle: true,
};
