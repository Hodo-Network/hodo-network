import { Meta, Story } from '@storybook/react';

import { assets } from '../../data/assets';
import { NFT } from '../../typings/nft';

import {
  PureMarketplaceView,
  PureMarketplaceViewProps,
} from './MarketplaceView';

export default {
  title: 'Views/MarketplaceView',
  component: PureMarketplaceView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<PureMarketplaceViewProps> = (args) => (
  <PureMarketplaceView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: assets,
};

export const VerifiedOnly = Template.bind({});
VerifiedOnly.args = {
  items: assets.filter((asset: NFT) => asset.contractVerified),
  verifiedOnly: true,
};
