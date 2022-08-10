import { Meta, Story } from '@storybook/react';

import { PureListingModule, PureListingModuleProps } from './ListingModule';

export default {
  title: 'Components/ListingModule',
  component: PureListingModule,
} as Meta;

const Template: Story<PureListingModuleProps> = (args) => (
  <PureListingModule {...args} />
);

export const Default = Template.bind({});
Default.args = {
  price: '2',
};

export const Owned = Template.bind({});
Owned.args = {
  price: '2',
  owned: true,
};

export const OwnedAndConnected = Template.bind({});
OwnedAndConnected.args = {
  price: '2',
  owned: true,
  connected: true,
};

export const ForSale = Template.bind({});
ForSale.args = {
  price: '2',
  forSale: true,
};

export const ForSaleAndConnected = Template.bind({});
ForSaleAndConnected.args = {
  price: '2',
  forSale: true,
  connected: true,
};

export const OwnedAndForSale = Template.bind({});
OwnedAndForSale.args = {
  price: '2',
  owned: true,
  forSale: true,
};

export const OwnedForSaleAndConnected = Template.bind({});
OwnedForSaleAndConnected.args = {
  price: '2',
  owned: true,
  forSale: true,
  connected: true,
};
