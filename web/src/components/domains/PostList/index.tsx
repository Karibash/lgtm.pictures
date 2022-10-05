import Masonry from '@mui/lab/Masonry';
import NoSsr from '@mui/material/NoSsr';
import React from 'react';

import PostListItem from '../PostListItem';

import type { PostListItemProps } from '../PostListItem';

const mocks = [...Array<undefined>(25)].map((_, index) => ({
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
}));

export type PostListProps = {
  className?: string;
  posts: PostListItemProps[];
};

const PostList: React.FC<PostListProps> = ({
  posts ,
  ...props
}) => {
  return (
    <NoSsr>
      <Masonry {...props} columns={{ lg: 5, md: 4, sm: 3, xs: 2 }} spacing={1}>
        {[...posts, ...mocks].map(post => (
          <PostListItem key={post.id} {...post} />
        ))}
      </Masonry>
    </NoSsr>
  );
};

export default PostList;
