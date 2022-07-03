import { Story, Meta } from '@storybook/react';

import { Toggle, ToggleProps } from './Toggle';

export default {
  title: 'Base/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Label = Template.bind({});
Label.args = {
  label: "Toggle label",
};
