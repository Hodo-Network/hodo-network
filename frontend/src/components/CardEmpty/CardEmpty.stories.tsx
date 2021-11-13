import React from "react";
import { Story, Meta } from "@storybook/react";

import { CardEmpty } from "./CardEmpty";

export default {
  title: "Components/CardEmpty",
  component: CardEmpty,
  decorators: [
    (Story) => (
      <div className='w-72'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <CardEmpty {...args} />;

export const Default = Template.bind({});
Default.args = {};
