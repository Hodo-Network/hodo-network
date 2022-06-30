import { Story, Meta } from "@storybook/react";

import { PureCreateItemForm, PureCreateItemFormProps } from "./CreateItemForm";

export default {
  title: "Pages/CreateItemForm",
  component: PureCreateItemForm,
} as Meta;

const Template: Story<PureCreateItemFormProps> = (args) => (
  <PureCreateItemForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
