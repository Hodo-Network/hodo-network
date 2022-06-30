import { Story, Meta } from "@storybook/react";

import {
  PureCollectionsPage,
} from "./CollectionsPage";

export default {
  title: "Pages/CollectionsPage",
  component: PureCollectionsPage,
} as Meta;

const Template: Story = (args) => (
  <PureCollectionsPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
