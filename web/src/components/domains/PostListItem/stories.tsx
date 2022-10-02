import React from 'react';

import PostListItem from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Domains/PostListItem',
  component: PostListItem,
} as ComponentMeta<typeof PostListItem>;

const Template: ComponentStory<typeof PostListItem> = args => <PostListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  image: {
    url: 'https://via.placeholder.com/256x256',
    title: 'Default',
    width: 256,
    height: 256,
  },
  viewCount: 1000,
  favorited: false,
  favoriteCount: 1000,
};

export const Favorited = Template.bind({});
Favorited.args = {
  id: '1',
  image: {
    url: 'https://via.placeholder.com/256x256',
    title: 'Default',
    width: 256,
    height: 256,
  },
  viewCount: 1000,
  favorited: true,
  favoriteCount: 1000,
};
