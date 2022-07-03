import { Story, Meta } from '@storybook/react';

import { FileUpload, IFileUploadProps } from './FileUpload';

export default {
  title: "Components/FileUpload",
  component: FileUpload,
} as Meta;

const Template: Story<IFileUploadProps> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
