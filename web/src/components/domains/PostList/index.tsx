import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import React from 'react';

import { useReachEvent } from '../../../hooks/useReachEvent';
import PostListItem from '../PostListItem';

import type { PostListItemProps } from '../PostListItem';

export type PostListProps = {
  className?: string;
  posts: PostListItemProps[];
  endReached?: () => void;
};

const PostList: React.FC<PostListProps> = ({
  posts ,
  endReached,
  ...props
}) => {
  const { TriggerComponent } = useReachEvent({ endReached });

  return (
    <NoSsr>
      <Box>
        <TriggerComponent.Start />
        <Masonry {...props} columns={{ lg: 5, md: 4, sm: 3, xs: 2 }} spacing={1}>
          {posts.map(post => (
            <PostListItem key={post.id} {...post} />
          ))}
        </Masonry>
        <TriggerComponent.End />
      </Box>
    </NoSsr>
  );
};

export default PostList;
