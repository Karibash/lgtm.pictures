import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react';

import PostFavoriteButton from './PostFavoriteButton';
import PostListItemImage, { PostListItemImageProps } from './PostListItemImage';

export type PostListItemProps = PostListItemImageProps & {
  id: string;
  favorited: boolean;
  favoriteCount: number;
};

const PostListItem: React.FC<PostListItemProps> = ({
  favorited,
  favoriteCount,
  ...props
}) => {
  const footerRef = useRef();
  const router = useRouter();

  const handleClickFooter = useCallback<React.MouseEventHandler>(event => {
    if (event.target !== footerRef.current) return;
    void router.push(`/posts/${props.id}`);
  }, [props.id, router]);

  return (
    <Paper elevation={6} sx={{ overflow: 'hidden', cursor: 'pointer' }}>
      <PostListItemImage {...props} />
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
      </Stack>
    </Paper>
  );
};

export default PostListItem;
