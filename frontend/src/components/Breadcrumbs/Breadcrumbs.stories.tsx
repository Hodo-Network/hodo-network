import { Meta, Story } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Home = Template.bind({});
Home.args = {
  crumbs: [
    { exact: true, name: 'Home', path: '/', current: true, isHome: true },
  ],
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  crumbs: [
    { exact: true, name: 'Home', path: '/', current: false, isHome: true },
    {
      exact: false,
      name: 'Collections',
      path: '/collections',
      current: false,
      isHome: false,
    },
    {
      exact: true,
      name: 'Collection',
      path: '/collection',
      current: true,
      isHome: false,
    },
  ],
};
