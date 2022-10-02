import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Provider } from 'jotai';
import React, { useRef } from 'react';

import { useRootUrl } from '../../../hooks/useRootUrl';
import ShareUrlButton from '../../elements/ShareUrlButton';
import PostFavoriteButton from '../PostFavoriteButton';
import ItemImage from './parts/ItemImage';

import type { ItemImageProps } from './parts/ItemImage';

export type PostListItemProps = ItemImageProps & {
  id: string;
  favorited: boolean;
  favoriteCount: number;
};

const PostListItem: React.FC<PostListItemProps> = ({
  id,
  image,
  viewCount,
  favorited,
  favoriteCount,
  ...props
}) => {
  const footerRef = useRef();
  const rootUrl = useRootUrl();

  return (
    <ImageListItem {...props}>
      <Paper elevation={6} sx={{ overflow: 'hidden' }}>
        <ItemImage id={id} image={image} viewCount={viewCount} />
        <Stack
          ref={footerRef}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          p={0.5}
        >
          <Stack direction="row" alignItems="center">
            <PostFavoriteButton favorited={favorited} />
            <Typography ml={0.5}>{favoriteCount}</Typography>
          </Stack>
          <Provider>
            <ShareUrlButton url={`${rootUrl}/posts/${id}`} />
          </Provider>
        </Stack>
      </Paper>
    </ImageListItem>
  );
};

export default PostListItem;
