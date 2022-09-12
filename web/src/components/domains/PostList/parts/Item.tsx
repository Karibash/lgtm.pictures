import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Provider } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react';

import { useRootUrl } from '../../../../hooks/useRootUrl';
import ShareUrlButton from '../../../elements/ShareUrlButton';
import PostFavoriteButton from '../../PostFavoriteButton';
import ItemImage, { ItemImageProps } from './ItemImage';

export type ItemProps = ItemImageProps & {
  id: string;
  favorited: boolean;
  favoriteCount: number;
};

const Item: React.FC<ItemProps> = ({
  favorited,
  favoriteCount,
  ...props
}) => {
  const footerRef = useRef();
  const router = useRouter();
  const rootUrl = useRootUrl();

  const handleClickFooter = useCallback<React.MouseEventHandler>(event => {
    if (event.target !== footerRef.current) return;
    void router.push(`/posts/${props.id}`);
  }, [props.id, router]);

  return (
    <Paper elevation={6} sx={{ overflow: 'hidden', cursor: 'pointer' }}>
      <ItemImage {...props} />
      <Stack
        ref={footerRef}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        p={0.5}
        onClick={handleClickFooter}
      >
        <Stack direction="row" alignItems="center">
          <PostFavoriteButton favorited={favorited} />
          <Typography ml={0.5}>{favoriteCount}</Typography>
        </Stack>
        <Provider>
          <ShareUrlButton url={`${rootUrl}/posts/${props.id}`} />
        </Provider>
      </Stack>
    </Paper>
  );
};

export default Item;
