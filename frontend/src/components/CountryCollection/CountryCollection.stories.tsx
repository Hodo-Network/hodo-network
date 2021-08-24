import React from "react";
import { Story, Meta } from "@storybook/react";

import { CountryCollection, CountryCollectionProps } from "./CountryCollection";

export default {
  title: "Components/CountryCollection",
  component: CountryCollection,
} as Meta;

const Template: Story<CountryCollectionProps> = (args) => (
  <CountryCollection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
