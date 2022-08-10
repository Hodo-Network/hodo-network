import { Meta, Story } from '@storybook/react';

import { IPureLocationButtonProps, PureLocationButton } from './LocationButton';

export default {
  title: 'Components/Buttons/LocationButton',
  component: PureLocationButton,
} as Meta;

const Template: Story<IPureLocationButtonProps> = (args) => (
  <PureLocationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const LocationSet = Template.bind({});
LocationSet.args = {
  location: '0, 0',
};
