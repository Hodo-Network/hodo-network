import { Meta, Story } from '@storybook/react';

import { SidebarOpenIcon } from './SidebarOpenIcon';

export default {
  title: 'Components/SidebarOpenIcon',
  component: SidebarOpenIcon,
  decorators: [
    (Story) => (
      <div className='w-12'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <SidebarOpenIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
