import { Story, Meta } from "@storybook/react";

import { PureCreateItemForm, PureCreateItemFormProps } from "./CreateItemForm";

export default {
  title: "Components/CreateItemForm",
  component: PureCreateItemForm,
} as Meta;

const Template: Story<PureCreateItemFormProps> = (args) => (
  <PureCreateItemForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
