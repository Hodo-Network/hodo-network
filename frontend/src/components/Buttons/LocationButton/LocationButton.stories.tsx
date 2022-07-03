import { Story, Meta } from "@storybook/react";

import { PureLocationButton, IPureLocationButtonProps } from "./LocationButton";

export default {
  title: "Components/Buttons/LocationButton",
  component: PureLocationButton,
} as Meta;

const Template: Story<IPureLocationButtonProps> = (args) => <PureLocationButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const LocationSet = Template.bind({});
LocationSet.args = {
  location: '0, 0'
};
