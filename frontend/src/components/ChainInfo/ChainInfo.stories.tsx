import { Story, Meta } from "@storybook/react";

import { ChainInfo, ChainInfoProps } from "./ChainInfo";

export default {
  title: "Components/ChainInfo",
  component: ChainInfo,
} as Meta;

const Template: Story<ChainInfoProps> = (args) => <ChainInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    address: "0x6cBEd289596f757fC406eE3AB4aC9E83cFb48B92",
    blk: "latest",
    assetID: "3RvKBAmQnfYionFXMfW5P8TDZgZiogKbHjM8cjpu16LKAgF5T",
  },
};
