import { Story, Meta } from "@storybook/react";

import { PureBreadcrumbs, PureBreadcrumbsProps } from "./Breadcrumbs";

export default {
  title: "UI/Breadcrumbs",
  component: PureBreadcrumbs,
} as Meta;

const Template: Story<PureBreadcrumbsProps> = (args) => <PureBreadcrumbs {...args} />;

export const Home = Template.bind({});
Home.args = {
  crumbs: [
    { exact: true, name: "Home", path: "/", current: true, isHome: true },
  ],
};

export const Collections = Template.bind({});
Collections.args = {
  crumbs: [
    { exact: true, name: "Home", path: "/", current: false, isHome: true },
    {
      exact: false,
      name: "Collections",
      path: "/collections",
      current: true,
      isHome: false,
    },
  ],
};
