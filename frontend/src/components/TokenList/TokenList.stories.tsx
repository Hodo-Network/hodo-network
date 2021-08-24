import React from "react";
import { Story, Meta } from "@storybook/react";

import { TokenList, TokenListProps } from "./TokenList";

export default {
  title: "Components/TokenList",
  component: TokenList,
} as Meta;

const Template: Story<TokenListProps> = (args) => <TokenList {...args} />;

export const Default = Template.bind({});
Default.args = {
  chainId: 4,
};
