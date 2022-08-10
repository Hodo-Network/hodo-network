import { Meta, Story } from '@storybook/react';
import { SplashScreen } from './SplashScreen';

export default {
  title: 'Components/SplashScreen',
  component: SplashScreen,
} as Meta;

const Template: Story = (args) => <SplashScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};
