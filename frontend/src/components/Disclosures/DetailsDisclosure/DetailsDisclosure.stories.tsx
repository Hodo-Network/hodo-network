import { Meta, Story } from '@storybook/react';
import { ZERO_ADDRESS } from '../../../constants';
import { assets } from '../../../data/assets';

import {
  DetailsDisclosure,
  IDetailsDisclosureProps,
} from './DetailsDisclosure';

export default {
  title: 'Components/Disclosures/DetailsDisclosure',
  component: DetailsDisclosure,
} as Meta;

const Template: Story<IDetailsDisclosureProps> = (args) => (
  <DetailsDisclosure {...args} />
);

export const Default = Template.bind({});
Default.args = {
  contractAddress: ZERO_ADDRESS,
  network: '1',
  tokenId: assets[0].tokenId,
};
