import { Story, Meta } from "@storybook/react";

import { RoadmapPage } from "./RoadmapPage";

export default {
  title: "Pages/RoadmapPage",
  component: RoadmapPage,
} as Meta;

const Template: Story = (args) => <RoadmapPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
