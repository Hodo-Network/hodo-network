import { Story, Meta } from "@storybook/react";

import { IThemeSwitchProps, ThemeSwitch } from "./ThemeSwitch";
import { themes } from '../../data/themes';

export default {
  title: "Components/ThemeSwitch",
  component: ThemeSwitch,
  decorators: [
    (Story) => (
      <div className="flex justify-end">
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story<IThemeSwitchProps> = (args) => <ThemeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  themes: themes.slice(0, 10)
};
