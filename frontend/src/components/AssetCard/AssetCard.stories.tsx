import { Story, Meta } from "@storybook/react";

import { AssetCard, AssetCardProps } from "./AssetCard";
import { assets } from "../../data/assets";

export default {
  title: "Components/AssetCard",
  component: AssetCard,
} as Meta;

const Template: Story<AssetCardProps> = (args) => <AssetCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: assets[0],
};
