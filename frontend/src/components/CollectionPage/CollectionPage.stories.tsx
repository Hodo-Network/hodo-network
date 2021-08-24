import React from "react";
import { Story, Meta } from "@storybook/react";

import { PureCollectionPage } from "./CollectionPage";

export default {
  title: "Pages/CollectionPage",
  component: PureCollectionPage,
} as Meta;

const Template: Story = (args) => <PureCollectionPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
