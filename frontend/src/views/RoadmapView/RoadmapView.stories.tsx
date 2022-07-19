import { Story, Meta } from "@storybook/react";

import { RoadmapView } from "./RoadmapView";

export default {
  title: "Views/RoadmapView",
  component: RoadmapView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => <RoadmapView {...args} />;

export const Default = Template.bind({});
Default.args = {};
