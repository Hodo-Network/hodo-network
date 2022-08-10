import { Meta, Story } from '@storybook/react';

import { themes } from '../../constants/themes';
import { IThemeSwitchProps, ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  decorators: [
    (Story) => (
      <div className='flex justify-end'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IThemeSwitchProps> = (args) => <ThemeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  themes: themes.slice(0, 10),
};
