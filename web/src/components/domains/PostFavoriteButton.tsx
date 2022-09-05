import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import React, { useCallback } from 'react';

export type PostFavoriteButtonProps = {
  favorited: boolean;
};

const PostFavoriteButton: React.FC<PostFavoriteButtonProps> = ({
  favorited,
}) => {
  const handleOnClick = useCallback(() => {
    console.log('PostFavoriteButton.handleOnClick');
  }, []);

  return (
    <IconButton aria-label="favorite post" color={favorited ? 'primary': 'default'} onClick={handleOnClick}>
      {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default PostFavoriteButton;
