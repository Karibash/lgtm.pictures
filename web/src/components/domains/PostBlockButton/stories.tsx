import React from 'react';

import PostBlockButton from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Domains/PostBlockButton',
  component: PostBlockButton,
} as ComponentMeta<typeof PostBlockButton>;

const Template: ComponentStory<typeof PostBlockButton> = args => <PostBlockButton {...args} />;

export const Default = Template.bind({});
Default.args = {
};
