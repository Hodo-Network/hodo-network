import { Story, Meta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: "Base/Loader",
  component: Loader,
} as Meta;

const Template: Story = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
