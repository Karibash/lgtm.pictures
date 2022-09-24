import Masonry from '@mui/lab/Masonry';
import React from 'react';

import Item, { ItemProps } from './parts/Item';

const mocks = [...Array<undefined>(50)].map((_, index) => ({
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
  posts: ItemProps[];
};

const PostList: React.FC<PostListProps> = ({
  posts ,
  ...props
}) => {
  return (
    <Masonry {...props} columns={{ lg: 5, md: 4, sm: 3, xs: 2 }} spacing={1}>
      {[...posts, ...mocks].map(post => (
        <Item key={post.id} {...post} />
      ))}
    </Masonry>
  );
};

export default PostList;
