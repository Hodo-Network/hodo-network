import { Meta, Story } from '@storybook/react';
import { ZERO_ADDRESS } from '../../constants';

import {
  PureCountryCollection,
  PureCountryCollectionProps,
} from './CountryCollection';

export default {
  title: 'Components/CountryCollection',
  component: PureCountryCollection,
} as Meta;

const Template: Story<PureCountryCollectionProps> = (args) => (
  <PureCountryCollection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  balance: 2530000000000000,
  address: ZERO_ADDRESS,
};
