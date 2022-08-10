import { Meta, Story } from '@storybook/react';

import { FileUpload, IFileUploadProps } from './FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  decorators: [
    (Story) => (
      <div className='max-w-3xl'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IFileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
