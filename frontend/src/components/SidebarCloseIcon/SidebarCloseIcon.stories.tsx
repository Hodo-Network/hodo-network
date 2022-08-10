import { Meta, Story } from '@storybook/react';

import { SidebarCloseIcon } from './SidebarCloseIcon';

export default {
  title: 'Components/SidebarCloseIcon',
  component: SidebarCloseIcon,
  decorators: [
    (Story) => (
      <div className='w-12'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <SidebarCloseIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
