import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';

import PostFavoriteButton from './PostFavoriteButton';
import PostViewButton from './PostViewButton';

export type PostListItemProps = {
  id: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  viewed: boolean;
  viewCount: number;
  favorited: boolean;
  favoriteCount: number;
};

const PostListItem: React.FC<PostListItemProps> = ({
  id,
  image,
  viewed,
  viewCount,
  favorited,
  favoriteCount,
}) => {
  const footerRef = useRef();

  const handleClickFooter = useCallback<React.MouseEventHandler>(event => {
    if (event.target !== footerRef.current) return;
    console.log('Post.handleClickFooter');
  }, []);

  return (
    <Paper elevation={6} sx={{ overflow: 'hidden', cursor: 'pointer' }}>
      <Image
        layout="responsive"
        src={image.url}
        alt={image.title}
        width={image.width}
        height={image.height}
      />
      <Stack
        ref={footerRef}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={0.5}
        pr={1.5}
        onClick={handleClickFooter}
      >
        <Stack direction="row" alignItems="center">
          <PostFavoriteButton favorited={favorited} />
          <Typography ml={0.5}>{favoriteCount}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <PostViewButton viewed={viewed} />
          <Typography ml={0.5}>{viewCount}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PostListItem;
