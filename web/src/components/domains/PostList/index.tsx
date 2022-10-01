import { CSSInterpolation } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { styled } from '@mui/material/styles';
import { handleBreakpoints } from '@mui/system';
import { resolveBreakpointValues } from '@mui/system/breakpoints';
import React from 'react';

import PostListItem, { PostListItemProps } from '../PostListItem';

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

const Wrapper = styled(ImageList)(({ theme }) => ({
  margin: 0,
  columnGap: 8,
  ...handleBreakpoints(
    { theme },
    resolveBreakpointValues({
      values: { lg: 5, md: 4, sm: 3, xs: 2 },
      breakpoints: theme.breakpoints.values,
    }),
    value => ({
      columnCount: value,
    }),
  ),
}) as CSSInterpolation);

export type PostListProps = {
  className?: string;
  posts: PostListItemProps[];
};

const PostList: React.FC<PostListProps> = ({
  posts ,
  ...props
}) => {
  return (
    <Wrapper {...props} variant="masonry" style={{ columnGap: undefined, columnCount: undefined }}>
      {[...posts, ...mocks].map(post => (
        <PostListItem key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default PostList;
