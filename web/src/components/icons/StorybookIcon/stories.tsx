import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import StorybookIcon from './index';

export default {
  title: 'Icons/StorybookIcon',
  component: StorybookIcon,
} as ComponentMeta<typeof StorybookIcon>;

const Template: ComponentStory<typeof StorybookIcon> = args => <StorybookIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
};
