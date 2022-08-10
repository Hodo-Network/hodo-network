import { Meta, Story } from '@storybook/react';

import {
  ActivityDisclosure,
  IActivityDisclosureProps,
} from './ActivityDisclosure';

export default {
  title: 'Components/Disclosures/ActivityDisclosure',
  component: ActivityDisclosure,
} as Meta;

const Template: Story<IActivityDisclosureProps> = (args) => (
  <ActivityDisclosure {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: '',
};
