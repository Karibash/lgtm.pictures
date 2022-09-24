import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import OpenInNewButton from './index';

export default {
  title: 'Elements/OpenInNewButton',
  component: OpenInNewButton,
} as ComponentMeta<typeof OpenInNewButton>;

const Template: ComponentStory<typeof OpenInNewButton> = args => <OpenInNewButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Google',
  href: 'https://google.com',
};
