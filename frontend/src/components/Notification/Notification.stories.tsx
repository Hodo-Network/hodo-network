import { Story, Meta } from "@storybook/react";

import { Notification, NotificationProps } from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
} as Meta;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  hidden: false,
  message: "Notification",
};
