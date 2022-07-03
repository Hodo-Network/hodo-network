import { Story, Meta } from '@storybook/react';

import { CurrencyLogo, ICurrencyLogoProps } from './CurrencyLogo';

export default {
  title: "Components/CurrencyLogo",
  component: CurrencyLogo,
} as Meta;

const Template: Story<ICurrencyLogoProps> = (args) => <CurrencyLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Eth = Template.bind({});
Eth.args = {
  network: 1,
};

export const Avax = Template.bind({});
Avax.args = {
  network: 43114,
};
