import { Story, Meta } from "@storybook/react";

import SelectBox, { SelectBoxProps } from "./SelectBox";
import { assets } from "../../data/assets";

export default {
  title: "UI/SelectBox",
  component: SelectBox,
} as Meta;

const Template: Story<SelectBoxProps> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Items",
  items: ["Item 1", "Item 2"],
};

export const Objects = Template.bind({});
Objects.args = {
  label: "Collections",
  items: assets,
};
