import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  PureCollectiblePage,
  PureCollectiblePageProps,
} from "./CollectiblePage";

export default {
  title: "Pages/CollectiblePage",
  component: PureCollectiblePage,
} as Meta;

const Template: Story<PureCollectiblePageProps> = (args) => (
  <PureCollectiblePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
