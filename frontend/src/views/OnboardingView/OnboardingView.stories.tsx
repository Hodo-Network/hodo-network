import { Story, Meta } from "@storybook/react";
import { ZERO_ADDRESS } from "../../constants";

import { PureOnboardingView, IPureOnboardingViewProps } from "./OnboardingView";

export default {
  title: "Views/OnboardingView",
  component: PureOnboardingView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<IPureOnboardingViewProps> = (args) => <PureOnboardingView {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Connected = Template.bind({});
Connected.args = {
  connected: true,
  address: ZERO_ADDRESS,
};
