import { Meta, Story } from '@storybook/react';

import { IImagePreviewProps, ImagePreview } from './ImagePreview';

export default {
  title: 'Components/ImagePreview',
  component: ImagePreview,
} as Meta;

const Template: Story<IImagePreviewProps> = (args) => (
  <ImagePreview {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithSrc = Template.bind({});
WithSrc.args = {
  src: './assets/images/forest.jpeg',
};
