import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import PostList from './index';

export default {
  title: 'Domains/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = args => <PostList {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [...Array<undefined>(25)].map((_, index) => ({
    id: index.toString(),
    image: {
      url: `https://via.placeholder.com/${512 * (index % 3 ? 1 : 2)}x${512 * (index % 5 ? 1 : 2)}`,
      title: index.toString(),
      width: 512 * (index % 3 ? 1 : 2),
      height: 512 * (index % 5 ? 1 : 2),
    },
    viewCount: (index % 5) * 10,
    favorited: Boolean(index % 3),
    favoriteCount: (index % 3) * 10,
  })),
};
