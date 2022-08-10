import { Meta, Story } from '@storybook/react';

import {
  AttributeDisclosure,
  IAttrDisclosureProps,
} from './AttributeDisclosure';

export default {
  title: 'Components/Disclosures/AttributeDisclosure',
  component: AttributeDisclosure,
} as Meta;

const Template: Story<IAttrDisclosureProps> = (args) => (
  <AttributeDisclosure {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Attrs = Template.bind({});
Attrs.args = {
  attrs: [
    {
      trait_type: 'Trait',
      value: 'Value',
    },
    {
      trait_type: 'Number Trait',
      value: 500,
    },
    {
      trait_type: 'String Trait',
      value: 'Any String',
    },
  ],
};
