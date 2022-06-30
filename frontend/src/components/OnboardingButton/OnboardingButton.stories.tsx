import { Story, Meta } from "@storybook/react";

import {
  PureOnboardingButton,
  PureOnboardingButtonProps,
} from "./OnboardingButton";

export default {
  title: "Components/OnboardingButton",
  component: PureOnboardingButton,
} as Meta;

const Template: Story<PureOnboardingButtonProps> = (args) => (
  <PureOnboardingButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
