import { Story, Meta } from "@storybook/react";

import { LocationButton } from "./LocationButton";

export default {
  title: "Components/LocationButton",
  component: LocationButton,
} as Meta;

const Template: Story = (args) => <LocationButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
