import { Story, Meta } from '@storybook/react';

import { MapDisclosure, IMapDisclosureProps } from './MapDisclosure';

export default {
  title: 'Components/Disclosures/MapDisclosure',
  component: MapDisclosure,
} as Meta;

const Template: Story<IMapDisclosureProps> = (args) => <MapDisclosure {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Attrs = Template.bind({});
Attrs.args = {
  attrs: [{
    "display_type": "number",
    "trait_type": "Latitude",
    "value": "100"
  },
  {
    "display_type": "number",
    "trait_type": "Longitude",
    "value": "260"
  }]
};
