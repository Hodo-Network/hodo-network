import { Meta, Story } from '@storybook/react';

import { Alert, IAlertProps } from './Alert';

export default {
  title: 'Base/Alert',
  component: Alert,
} as Meta;

const Template: Story<IAlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: 'This is a sample Success',
  status: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a sample Warning',
  status: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is a sample Error',
  status: 'error',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is a sample Info',
  status: 'info',
};
