import React from "react";
import { Story, Meta } from "@storybook/react";

import { Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

export default {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Home = Template.bind({});
Home.args = {
  crumbs: [
    { exact: true, name: "Home", path: "/", current: true, isHome: true },
  ],
  hide: false,
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
  hide: false,
};
