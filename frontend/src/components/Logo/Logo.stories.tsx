import { Meta, Story } from '@storybook/react';

import { HodoPinFilled } from '../../assets';
import { Logo, LogoProps } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: HodoPinFilled,
  alt: 'Logo',
};
