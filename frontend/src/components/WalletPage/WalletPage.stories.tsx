import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureWalletPage, PureWalletPageProps } from "./WalletPage";

export default {
  title: "Pages/WalletPage",
  component: PureWalletPage,
} as Meta;

const Template: Story<PureWalletPageProps> = (args) => (
  <PureWalletPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
