import React from "react";
import { Story, Meta } from "@storybook/react";

import { CollectionCardEmpty } from "./CollectionCardEmpty";

export default {
  title: "Components/CollectionCardEmpty",
  component: CollectionCardEmpty,
  decorators: [
    (Story) => (
      <div className='w-72'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <CollectionCardEmpty {...args} />;

export const Default = Template.bind({});
Default.args = {};
