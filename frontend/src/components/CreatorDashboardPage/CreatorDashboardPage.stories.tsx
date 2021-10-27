import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PureCreatorDashboardPage,
  PureCreatorDashboardPageProps,
} from "./CreatorDashboardPage";

export default {
  title: "Pages/CreatorDashboardPage",
  component: PureCreatorDashboardPage,
} as Meta;

const Template: Story<PureCreatorDashboardPageProps> = (args) => (
  <PureCreatorDashboardPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
