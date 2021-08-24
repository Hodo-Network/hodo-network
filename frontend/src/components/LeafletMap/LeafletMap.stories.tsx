import React from "react";
import { Story, Meta } from "@storybook/react";

import { LeafletMap, LeafletMapProps } from "./LeafletMap";

export default {
  title: "Components/LeafletMap",
  component: LeafletMap,
} as Meta;

const Template: Story<LeafletMapProps> = (args) => <LeafletMap {...args} />;

export const Default = Template.bind({});
Default.args = {};
