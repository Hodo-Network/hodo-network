import { Meta, Story } from '@storybook/react';
import { social } from '../../data/social';

import { PureFooter, PureFooterProps } from './Footer';

export default {
  title: 'Components/Footer',
  component: PureFooter,
} as Meta;

const Template: Story<PureFooterProps> = (args) => <PureFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: social,
};
