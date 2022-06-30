import { Story, Meta } from "@storybook/react";

import { PureCollectionPage, PureCollectionPageProps } from "./CollectionPage";

export default {
  title: "Pages/CollectionPage",
  component: PureCollectionPage,
} as Meta;

const Template: Story<PureCollectionPageProps> = (args) => (
  <PureCollectionPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [],
};
