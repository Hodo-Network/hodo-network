import { Story, Meta } from "@storybook/react";

import { PureSellItemForm, PureSellItemFormProps } from "./SellItemForm";

export default {
  title: "Components/SellItemForm",
  component: PureSellItemForm,
} as Meta;

const Template: Story<PureSellItemFormProps> = (args) => (
  <PureSellItemForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
