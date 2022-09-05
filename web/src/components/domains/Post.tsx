import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

export type PostProps = {
  id: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  viewCount: number;
  favoriteCount: number;
};

const Post: React.FC<PostProps> = ({
  id,
  image,
  viewCount,
  favoriteCount,
}) => {
  return (
    <Paper elevation={6} sx={{ overflow: 'hidden' }}>
      <Image
        layout="responsive"
        src={image.url}
        alt={image.title}
        width={image.width}
        height={image.height}
      />
      <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ p: 1 }}>
        <Stack direction="row">
          <FavoriteBorderIcon sx={{ mr: 1 }}/>
          <Typography>{favoriteCount}</Typography>
        </Stack>
        <Stack direction="row">
          <VisibilityIcon sx={{ mr: 1 }}/>
          <Typography>{viewCount}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Post;
