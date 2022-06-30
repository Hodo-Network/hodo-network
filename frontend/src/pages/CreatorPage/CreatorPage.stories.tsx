import { Story, Meta } from "@storybook/react";

import {
  PureCreatorPage,
  PureCreatorPageProps,
} from "./CreatorPage";

export default {
  title: "Pages/CreatorPage",
  component: PureCreatorPage,
} as Meta;

const Template: Story<PureCreatorPageProps> = (args) => (
  <PureCreatorPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
