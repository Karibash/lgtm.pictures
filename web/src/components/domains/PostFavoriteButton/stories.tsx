import React from 'react';

import PostFavoriteButton from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Domains/PostFavoriteButton',
  component: PostFavoriteButton,
} as ComponentMeta<typeof PostFavoriteButton>;

const Template: ComponentStory<typeof PostFavoriteButton> = args => <PostFavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  favorited: false,
};

export const Favorited = Template.bind({});
Favorited.args = {
  favorited: true,
};
