import { Story, Meta } from "@storybook/react";

import {
  PureAssetPage,
  PureAssetPageProps,
} from "./AssetPage";

export default {
  title: "Pages/AssetPage",
  component: PureAssetPage,
} as Meta;

const Template: Story<PureAssetPageProps> = (args) => (
  <PureAssetPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
