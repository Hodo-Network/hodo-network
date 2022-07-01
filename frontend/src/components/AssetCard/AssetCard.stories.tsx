import { Story, Meta } from "@storybook/react";

import { PureAssetCard, PureAssetCardProps } from "./AssetCard";

export default {
  title: "Components/AssetCard",
  component: PureAssetCard,
} as Meta;

const Template: Story<PureAssetCardProps> = (args) => <PureAssetCard {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   item: "",
//   collection: "",
//   listing: "",
// };
