import { Story, Meta } from "@storybook/react";

import {
  PureOnboardingButton,
  PureOnboardingButtonProps,
} from "./OnboardingButton";

export default {
  title: "Components/Buttons/OnboardingButton",
  component: PureOnboardingButton,
} as Meta;

const Template: Story<PureOnboardingButtonProps> = (args) => (
  <PureOnboardingButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
