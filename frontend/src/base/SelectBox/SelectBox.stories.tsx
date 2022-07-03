import { Story, Meta } from "@storybook/react";

import SelectBox, { SelectBoxProps } from "./SelectBox";
import { assets } from "../../data/assets";

export default {
  title: "Base/SelectBox",
  component: SelectBox,
} as Meta;

const Template: Story<SelectBoxProps> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ["Item 1", "Item 2"],
};

export const Label = Template.bind({});
Label.args = {
  label: "Items",
  items: ["Item 1", "Item 2"],
};

export const StringItems = Template.bind({});
StringItems.args = {
  items: ["Item 1", "Item 2"],
};

export const ObjectItems = Template.bind({});
ObjectItems.args = {
  items: assets,
};
