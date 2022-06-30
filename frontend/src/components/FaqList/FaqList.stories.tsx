import { Story, Meta } from "@storybook/react";

import { FaqList, FaqListProps } from "./FaqList";
import { faqs } from "../../data/faqs";

export default {
  title: "Components/FaqList",
  component: FaqList,
} as Meta;

const Template: Story<FaqListProps> = (args) => <FaqList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: faqs,
};
