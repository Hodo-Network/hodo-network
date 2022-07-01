import { Story, Meta } from "@storybook/react";

import {
  PureCollectionsPage, PureCollectionsPageProps,
} from "./CollectionsPage";

export default {
  title: "Pages/CollectionsPage",
  component: PureCollectionsPage,
} as Meta;

const Template: Story<PureCollectionsPageProps> = (args) => (
  <PureCollectionsPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: []
};
