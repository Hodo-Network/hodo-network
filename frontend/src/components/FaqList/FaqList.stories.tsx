import { Meta, Story } from '@storybook/react';

import { faqs } from '../../data/faqs';
import { FaqList, FaqListProps } from './FaqList';

export default {
  title: 'Components/FaqList',
  component: FaqList,
} as Meta;

const Template: Story<FaqListProps> = (args) => <FaqList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: faqs,
};
