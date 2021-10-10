import React from "react";
import { Story, Meta } from "@storybook/react";

import { CountryCollection, CountryCollectionProps } from "./CountryCollection";

import HodoNftAbi from "../../abi/HodoNFT.abi.json";

export default {
  title: "Components/CountryCollection",
  component: CountryCollection,
} as Meta;

const Template: Story<CountryCollectionProps> = (args) => (
  <CountryCollection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: "0x4b9b8F97305B3d266812c91715120c4EC303d812",
  abi: HodoNftAbi,
};
