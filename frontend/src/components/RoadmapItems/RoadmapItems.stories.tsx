import { Story, Meta } from "@storybook/react";

import { RoadmapItems, RoadmapItemsProps } from "./RoadmapItems";
import { roadmap } from "../../data/roadmap";

export default {
  title: "Components/RoadmapItems",
  component: RoadmapItems,
} as Meta;

const Template: Story<RoadmapItemsProps> = (args) => <RoadmapItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: roadmap,
};
