import Masonry from '@mui/lab/Masonry';
import React from 'react';

import PostListItem, { PostListItemProps } from './PostListItem';

const mocks = [...Array(50)].map((_, index) => ({
  id: index.toString(),
  image: {
    url: `https://via.placeholder.com/${128 * (index % 3 ? 1 : 2)}x${128 * (index % 5 ? 1 : 2)}`,
    title: index.toString(),
    width: 128 * (index % 3 ? 1 : 2),
    height: 128 * (index % 5 ? 1 : 2),
  },
  viewed: Boolean(index % 5),
  viewCount: (index % 5) * 10,
  favorited: Boolean(index % 3),
  favoriteCount: (index % 3) * 10,
}));

export type PostListProps = {
  posts: PostListItemProps[];
};

const PostList: React.FC<PostListProps> = ({
  posts ,
}) => {
  return (
    <Masonry columns={{ lg: 5, md: 4, sm: 3, xs: 2 }} spacing={1}>
      {[...posts, ...mocks].map(post => (
        <PostListItem key={post.id} {...post} />
      ))}
    </Masonry>
  );
};

export default PostList;
